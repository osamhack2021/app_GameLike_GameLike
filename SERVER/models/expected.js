const Sequelize = require('sequelize');

module.exports = class Expected extends Sequelize.Model {
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
      detail: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      isPerformed: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      userId: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      isPublic: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Expected',
      tableName: 'expected',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Expected.belongsToMany(db.Hashtag, { through: 'ExpectedHashTag' });
  }
};
