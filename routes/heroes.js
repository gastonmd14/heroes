var express = require('express');
var router = express.Router();

const heroesController = require('../controllers/heroesController');


router.get('/', heroesController.list); 
router.get('/:id/profesion', heroesController.detalle); 
router.get('/:id/resenia/tipo', heroesController.resenia); 


module.exports = router;