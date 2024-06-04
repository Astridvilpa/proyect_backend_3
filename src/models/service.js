"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // service {1}---{n} appointment
      Service.hasMany(models.Appointment, {
        as: 'appointments',
        foreignKey: "service_id",
      });
    }
  }
  Service.init(
    {
      service_name: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Service",
      tableName: "services",
    }
  );
  return Service;
};
