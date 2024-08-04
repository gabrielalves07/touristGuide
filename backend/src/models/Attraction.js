const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Destination = require('./Destination');

const Attraction = sequelize.define('Attraction', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  tips: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  destinationId: {
    type: DataTypes.INTEGER,
    references: {
      model: Destination,
      key: 'id'
    }
  }
}, {
  tableName: 'attractions',
  timestamps: false
});

Attraction.belongsTo(Destination, { foreignKey: 'destinationId' });

module.exports = Attraction;
