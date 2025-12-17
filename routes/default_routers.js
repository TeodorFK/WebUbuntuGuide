const express = require('express');
const controller = require('../controller/default_controller');

const router = express.Router();

router.get('/', controller.index);

router.get('/global-protect', controller.protect);

router.get('/vm', controller.vm);

router.get('/ubuntu', controller.ubuntu);

router.get('/node', controller.node);

router.get('/node-local', controller.nodeLocal);

router.get('/node-vm', controller.nodeVm);

router.get('/begrep', controller.begrep);

module.exports = router;
