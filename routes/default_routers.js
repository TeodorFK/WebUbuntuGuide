const express = require('express');
const controller = require('../controller/default_controller');

const router = express.Router();

router.get('/', controller.index);

router.get('/vm', controller.vm);

router.get('/ubuntu', controller.ubuntu);

router.get('/node', controller.node);

module.exports = router;
