const Attraction = require('../models/Attraction');

exports.getAllAttractionsByDestination = async (req, res) => {
  try {
    const attractions = await Attraction.findAll({ where: { destinationId: req.params.destinationId } });
    res.json(attractions);
  } catch (err) {
    res.status(500).send(err);
  }
};
