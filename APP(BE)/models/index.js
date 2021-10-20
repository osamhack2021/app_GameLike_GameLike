const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('./user');
const Post = require('./post');
const Hashtag = require('./hashtag');
const Quest = require('./quest');
const Field = require('./field');
const Expected = require('./expected');
const Performed = require('./performed');

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Hashtag = Hashtag;
db.Quest = Quest;
db.Field = Field;
db.Expected = Expected;
db.Performed = Performed;

User.init(sequelize);
Post.init(sequelize);
Hashtag.init(sequelize);
Quest.init(sequelize);
Field.init(sequelize);
Expected.init(sequelize);
Performed.init(sequelize);

User.associate(db);
Post.associate(db);
Hashtag.associate(db);
Quest.associate(db);
Field.associate(db);
Expected.associate(db);
Performed.associate(db);

module.exports = db;
