const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      email: {
        type: Sequelize.STRING(40),
        allowNull: true,
        unique: true,
      },
      nick: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      enlistDate: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      //복무시작일
      dischargeDate:{
        type: Sequelize.STRING(40),
        allowNull: true,
      },
      exp: {
        type:Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },      
      //경험치
      provider: {
        type: Sequelize.STRING(10),
        allowNull: false,
        defaultValue: 'local',
      },
      snsId: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.User.hasMany(db.Post);
    /*db.User.hasMany(db.Quest, {
     // foreignKey: 'creatorId', sourceKey: 'id'
    });*/

    db.User.belongsToMany(db.User, {
      foreignKey: 'followingId',
      as: 'Followers',
      through: 'Follow',
    });
    db.User.belongsToMany(db.User, {
      foreignKey: 'followerId',
      as: 'Followings',
      through: 'Follow',
    });
    db.User.belongsToMany(db.Post, {through : 'Like'});
    //db.User.belongsToMany(db.Quest, {through: 'Like'});
    db.User.belongsToMany(db.Field, {through: 'FieldUser'});
  }
};
