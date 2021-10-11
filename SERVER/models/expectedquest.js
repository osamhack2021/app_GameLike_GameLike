const Sequelize = require('sequelize');

module.exports = class expectedQuest extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: false,
      },
      date: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      isPerformed: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      isPublic: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'expectedQuest',
      tableName: 'expectedquests',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
  }
};
