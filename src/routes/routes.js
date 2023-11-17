const express = require('express');
const router = express.Router();

const controller = require('../controllers/tareasControllers');

router.get('/', controller.index );
router.post('/', controller.store ); //parte de administracion
router.put('/:id', controller.update); //parte de actualizacion 
router.delete('/:id', controller.destroy); //parte de de eliminar tachar


module.exports = router