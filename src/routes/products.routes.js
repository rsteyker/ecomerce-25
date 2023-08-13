const { Router } = require("express");
const { getAllProducts, createProducts, updateProducts, getAllProductUserCar } = require("../controllers/products.controllers");
const createProductsValidate = require('../validators/product.validator');
const { uploadImageProduct } = require("../middlewares/upload.middleware");


const router = Router();

router.get("/products", getAllProducts);
router.post('/products', uploadImageProduct.single('productImage'), createProductsValidate, createProducts);
router.put('/products/:id', uploadImageProduct.single('productImage'), updateProducts);
router.get('/users/:userId/cars', getAllProductUserCar);

module.exports = router;
