const Sequelize = require('sequelize');

module.exports = class Field extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true,
      },
      peopleWith: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      iconName: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      creatorId: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      isPublic: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Field',
      tableName: 'fields',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
  }
};