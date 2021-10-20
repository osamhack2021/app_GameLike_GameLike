const Sequelize = require('sequelize');

module.exports = class Quest extends Sequelize.Model {
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
      startDate: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      endDate: {
        type: Sequelize.STRING(30),
        allowNull: true,
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
      modelName: 'Quest',
      tableName: 'quests',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Quest.belongsTo(db.Field, {});
    db.Quest.belongsToMany(db.Hashtag, { through: 'QuestHashtag' });
  }
};
