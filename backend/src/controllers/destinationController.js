const Destination = require('../models/Destination');

exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.findAll();
    res.json(destinations);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findByPk(req.params.id);
    if (destination) {
      res.json(destination);
    } else {
      res.status(404).send('Destino não encontrado');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
