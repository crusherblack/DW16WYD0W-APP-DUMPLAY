"use strict";
module.exports = (sequelize, DataTypes) => {
  const Artis = sequelize.define("Artis", {
    name: DataTypes.STRING,
    old: DataTypes.STRING,
    type: DataTypes.STRING,
    startCareer: DataTypes.INTEGER,
  });
  Artis.associate = function (models) {
    // associations can be defined here
  };
  return Artis;
};
