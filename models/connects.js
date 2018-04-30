'use strict';
module.exports = (sequelize, DataTypes) => {
  var Connects = sequelize.define('Connects', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    message: {
      type: DataTypes.STRING
    }
  }, {});
  Connects.associate = function(models) {
    // associations can be defined here
  };
  return Connects;
};