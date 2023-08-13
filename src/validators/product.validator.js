const { check } = require('express-validator');
const validateResult = require('../middlewares/validate.middleware');


const createProductsValidate = [
    check("name", "Error con el campo name")
        .exists().withMessage("Falta el campo de name")
        .notEmpty().withMessage("El name no debe estar vacio")
        .isString().withMessage("El tipo de dato debe ser string")
        .isLength({ max: 50 }).withMessage('La cantidad de caracteres debe ser maxima 50'),

    check('description', 'Error con el campo description')
        .isString().withMessage('El tipo de dato debe ser string'),

    check('price', 'Error con el campo price')
        .exists().withMessage('Falta el campo de price')
        .notEmpty().withMessage('El price no debe estar vacio')
        .isFloat().withMessage('El precio debe ser un número válido.'),

    check('availableQty', 'Error con el campo availableQty')
        .exists().withMessage('Falta el campo el camp de availableQty')
        .notEmpty().withMessage('El availableQty no debe estar vacio')
        .isInt().withMessage('El tipo de dato debe ser entero'),

    check('userId', 'Error con el campo userId')
        .exists().withMessage('Falta el campo userId')
        .notEmpty().withMessage("El userId no debe estar vacio")
        .isInt().withMessage('El tipo de dato debe ser entero')
        .isString().withMessage('El tipo de dato debe ser string'),

    check('userId', 'Error con el campo userId')
        .exists().withMessage('Falta el campo userId')
        .notEmpty().withMessage("El userId no debe estar vacio")
        .isInt().withMessage('El tipo de dato debe ser entero')
        .isString().withMessage('El tipo de dato debe ser string'),
    validateResult
];



module.exports = createProductsValidate;


