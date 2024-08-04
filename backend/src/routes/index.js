const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');
const attractionController = require('../controllers/attractionController');

router.get('/destinations', destinationController.getAllDestinations);
router.get('/destinations/:id', destinationController.getDestinationById);
router.get('/destinations/:destinationId/attractions', attractionController.getAllAttractionsByDestination);

module.exports = router;
