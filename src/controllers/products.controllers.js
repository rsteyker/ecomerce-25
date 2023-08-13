const { Op } = require("sequelize");
const fs = require('fs');
const path = require('path');
const { Products, Users, Cars } = require("../models");

const getAllProducts = async (req, res, next) => {
  try {
    // pedir todos los productos al modelo Products
    const products = await Products.findAll({
      where: {
        availableQty: {
          [Op.gt]: 0,
        },
      },
    });
    res.json(products);

  } catch (error) {
    next(error);
  }
};

const getAllProductUserCar = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await Users.findByPk(userId, {
      attributes: {
        exclude: ['password', 'profileImage', 'validEmail', '']
      },
      include: [
        {
          model: Cars,
          attributes: ['id', 'total']
        }
      ]
    });

    if (!user) {
      return res.status(404).json({
        message: 'Usuario no encontrado'
      })
    }

    res.json(user);

  } catch (error) {
    next(error);
  }
};

const createProducts = async (req, res, next) => {
  try {
    const { name, description, price, availableQty, userId } = req.body;
    let productImage = null;

    if (req.file) {
      productImage = req.file.filename;
    }

    const productData = { name, description, price, availableQty, userId, productImage };
    await Products.create(productData);
    res.status(201).send();

  } catch (error) {
    next(error);
  }
};

const updateProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, price, availableQty, userId } = req.body;
    const image = req.file ? req.file.filename : null;

    const productName = await Products.findByPk(id);
    if (!productName) {
      return res.status(404).json({
        error: 'Product not found'
      })
    }
    /*Guardar el nombre del archivo anterior antes de 
    actualizar el servicio*/
    const saveImage = productName.image;

    // Actualizar los datos del servicio
    productName.name = name,
      productName.description = description,
      productName.price = price,
      productName.availableQty = availableQty,
      productName.userId = userId
    if (image) {
      productName.productImage = image;
    }

    const saveProduct = await productName.save();

    // Eliminar el archivo anterior solo si se proporciona un 
    //nuevo archivo en la solicitud
    if (productImage && saveImage) {
      const filePath = path.join(__dirname, './images', saveImage);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    res.json(saveProduct);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  createProducts,
  updateProducts,
  getAllProductUserCar,
};
