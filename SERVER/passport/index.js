const passport = require('passport');
const local = require('./localStrategy');
//const kakao = require('./kakaoStrategy');
const User  = require('../models/user');

//const user = {};
module.exports = () =>{
	passport.serializeUser((user, done) =>{ 
		// id 1, name : zero, age: 25
		// 너무 무거우니까 id만 콜백
		done(null, user.id);
	});
	//메모리에 1번만 저장
	passport.deserializeUser((id, done) =>{
		// 1 -> {id:1, name:zero, age:25 } -> req.user
		User.findOne({
			where: { id },
			include: [{
			  model: User,
			  attributes: ['id', 'nick'],
			  as: 'Followers',
			}, {
			  model: User,
			  attributes: ['id', 'nick'],
			  as: 'Followings',
			}],
		  })
			.then(user => done(null, user))
			.catch(err => done(err));
		/*if(user[id]){
			done(user[id]);
		} else {
			User.find({where: { id } })
				.then(user => user[id] = user, done(null, user))
				.catch(err => done(err));
		}*/
		
	});
	
	local();
	//kakao();
};