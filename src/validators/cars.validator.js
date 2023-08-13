const { check } = require('express-validator');
const validateResult = require('../middlewares/validate.middleware');


const createaAddProductToCarValidator = [
    check('price', 'Error con el campo price')
        .exists().withMessage('Falta el campo de price')
        .notEmpty().withMessage('El price no debe estar vacio')
        .isFloat().withMessage('El price debe ser un número válido.'),

    check('productId', 'Error con el campo productId')
        .exists().withMessage('Falta el campo productId')
        .notEmpty().withMessage("El productId no debe estar vacio")
        .isInt().withMessage('El tipo de dato debe ser entero'),

    check('quantity', 'Error con el campo quantity')
        .exists().withMessage('Falta el campo quantity')
        .notEmpty().withMessage("El quantity no debe estar vacio")
        .isInt().withMessage('El tipo de dato debe ser entero'),

    check('carId', 'Error con el campo carId')
        .exists().withMessage('Falta el campo carId')
        .notEmpty().withMessage("El carId no debe estar vacio")
        .isInt().withMessage('El tipo de dato debe ser entero'),
    validateResult
];

const createBuyProductsInCarValidator = [
    check('userId', 'Error con el campo userId')
        .exists().withMessage('Falta el campo userId')
        .notEmpty().withMessage("El userId no debe estar vacio")
        .isInt().withMessage('El tipo de dato debe ser entero'),

    check('total', 'Error en el campo total')
        .isInt().withMessage('El tipo de dato debe ser entero'),

    check('productId', 'Error en el campo productId')
        .exists().withMessage('Falta el campo productId')
        .notEmpty().withMessage("El productId no debe estar vacio")
        .isInt().withMessage('El tipo de dato debe ser entero'),

    check('price', 'Error en el campo price')
        .isFloat().withMessage('El precio debe ser un número válido.'),

    check('quantity', 'Error en el campo quantity')
        .isInt().withMessage('El tipo de dato debe ser entero'),

    check('orderId', 'Error en el campo OrderId')
        .exists().withMessage('Falta el campo orderId')
        .notEmpty().withMessage("El orderId no debe estar vacio")
        .isInt().withMessage('El tipo de dato debe ser entero'),
    validateResult
];

module.exports = {
    createaAddProductToCarValidator,
    createBuyProductsInCarValidator
};


