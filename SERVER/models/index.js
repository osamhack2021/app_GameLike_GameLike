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
/*const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
	config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);


db.User.hasMany(db.Post); //1대 다 관계에선 무조건 1이 hasMany
db.Post.belongsTo(db.User);

db.Post.belongsToMany(db.Hashtag, {through: 'PostHashtag'});
//through에는 새로 생기는 모델 이름을 넣어줌(매칭 테이블)
db.Hashtag.belongsToMany(db.Post, {through: 'PostHashtag'});

db.User.belongsToMany(db.User, {through: 'Follow', as :'Followers', foreignKey: 'followingId'});
db.User.belongsToMany(db.User, {through: 'Follow', as :'Following', foreignKey: 'followerId'});

db.User.belongsToMany(db.Post, {through: 'Like'});
db.Post.belongsToMany(db.User, {through: 'Like'});


//as : 매칭 모델 이름, foreignKey: 상대테이블 아이디

module.exports = db;

// 1 세로
// 2 네로
// 3 히어로
// 4 바보

//일반인-유명인
// 1-2
// 1-3
// 2-3
// 3-1
// 1-4

// 1 세로
// 2 네로
// 3 히어로
// 4 바보



//다대다 관게에서는 새로운 모델 (테이블)

// 1 안녕하세요 #노드 # 익스프레스
// 2 안녕하세요 #노드 #제이드
// 3 안녕하세요. #제이드 #퍼그

// 매칭 테이블(새로 생기는 모델)
// 1-1
// 1-2
// 2-1
// 2-3
// 3-3
// 3-4

// 1 노드
// 2 익스프레스
// 3 제이드
// 4 퍼그 */