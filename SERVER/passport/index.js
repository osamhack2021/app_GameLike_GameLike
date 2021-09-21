const local = require('./localStrategy.js');
const kakao = require('./kakaoStrategy');

module.exports = (passport) =>{
	passport.serializeUser((user, done) =>{ 
		// id 1, name : zero, age: 25
		done(null, user.id);
	});
	passport.deserializeUser((id, done) =>{
		User.find({where: { id } })
			.then(user => done(null, user))
			.catch(err => done(err));
	});
	
	local(passport);
	kakao(passport);
};