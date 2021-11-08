const express = require('express');
let router = express.Router();

const productsController = require('../controllers/productsController');


router.get('/carrito', productsController.carrito);
router.get('/detalles', productsController.detalles);
router.get('/tienda', productsController.store);
router.get('/crear', productsController.crear);
router.get('/modificar', productsController.modificar);
router.get('/eliminar', productsController.eliminar);


module.exports = router;