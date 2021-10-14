const Sequelize = require('sequelize');

module.exports = class Performed extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      questName: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: false,
      },
      hashTag: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      date: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      startTime: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      endTime: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      detail: {
        type: Sequelize.STRING(40),
        allowNull : false,
      },
      userId: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      isPerformed: {
        type: Sequelize.BOOLEAN,
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
      modelName: 'Performed',
      tableName: 'performed',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Performed.belongsToMany(db.Hashtag, { through: 'PerformedHashTag' });
  }
};
