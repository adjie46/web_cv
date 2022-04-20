'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Portofolio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Portofolio.belongsTo(models.Category, {
            foreignKey: "categoryId",
            as: "category",
        })
    }
  }
  Portofolio.init({
    portofolioName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Portofolio',
  });
  return Portofolio;
};