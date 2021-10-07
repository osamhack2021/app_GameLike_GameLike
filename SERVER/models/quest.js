const Sequelize = require('sequelize');

module.exports = class Quest extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true,
      },
      fieldId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      estimatedTime: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      creatorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      isRepeat: {
        type: Sequelize.BOOLEAN,
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
      modelName: 'Quest',
      tableName: 'quests',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Quest.belongsTo(db.User);
    db.Quest.belongsToMany(db.Hashtag, { through: 'QuestHashtag' });
    db.Quest.belongsToMany(db.User, {
      through : 'Like', 
      as: 'Liker',
    });
  }
};