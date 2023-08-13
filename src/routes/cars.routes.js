const { Router } = require("express");
const {
  addProductToCar,
  buyProductsInCar,
} = require("../controllers/car.controllers");

const {
  createaAddProductToCarValidator,
  createBuyProductsInCarValidator
} = require('../validators/cars.validator')


const router = Router();

router.post("/products/car/:id", createaAddProductToCarValidator, addProductToCar);
router.post("/products/order/", createBuyProductsInCarValidator, buyProductsInCar);

module.exports = router;
