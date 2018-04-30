'use strict';
module.exports = (sequelize, DataTypes) => {
  var Connects = sequelize.define('Connects', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [1, 25]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    message: {
      type: DataTypes.STRING, 
      allowNull: false
    }
  }, {});
  Connects.associate = function(models) {
    // associations can be defined here
  };
  return Connects;
};