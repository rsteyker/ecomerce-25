const multer = require("multer");
const path = require('path');

const acceptedTypes = ["image/png", "image/jpeg", "image/webp"];

const upload = multer({
  storage: multer.diskStorage({
    destination: path.join(__dirname, "../../public"),
    filename: (req, file, cb) => {
      const date = Date.now();
      cb(null, `${date}-${file.originalname}`);
    },
  }),
  limits: {
    fileSize: 500000,
  },
  fileFilter: (req, file, cb) => {
    const { mimetype } = file;
    // si en el arreglo acceptedTypes no esta incluido el mimetype del parametro file
    if (!acceptedTypes.includes(mimetype)) {
      cb({
        status: 400,
        errorName: "file not allowed",
        error: `Only ${acceptedTypes.join(", ")} are allowed`,
      });
    }
    cb(null, true); // false indica que la imagen no se sube
  },
});

const uploadImageProduct = multer({
  storage: multer.diskStorage({
    destination: path.resolve('./src/images'),
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  }),
  limits: {
    fileSize: 500000,
  },
  fileFilter: (req, file, cb) => {
    if (!acceptedTypes.includes(file.mimetype)) {
      return cb(null, false, {
        error: "Archivo no soportado",
        message: `El archivo debe tener una extensión válida ${acceptedTypes.join(', ')}`
      })
    }
    cb(null, true)
  }
})

module.exports = {
  upload,
  uploadImageProduct,
};
