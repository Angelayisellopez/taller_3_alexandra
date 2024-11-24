const express = require('express');
let testerController = require('../controller/testerController');
let router = express.Router();

router.get('/', testerController.traerTester);

