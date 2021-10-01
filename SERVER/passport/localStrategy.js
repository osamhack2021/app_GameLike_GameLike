const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User  = require('../models/user');

module.exports = () => {
	passport.use(new LocalStrategy({
		usernameField: 'email', // req.body.email
		passwordField: 'password', //req.body.password
	}, async (email, password, done) => { // done(에러, 성공, 실패)
		try{
			const exUser = await User.findOne( { where: { email } });
			if(exUser){
				//비밀번호 검사
				const result = await bcrypt.compare(password, exUser.password);
				if(result){
					done(null, exUser);
				} else{
					done(null, false, {message: '비밀번호가 일치하지 않습니다.'});
					// 이메일 비밀번호 조합이 맞지않습니다.로 바꾸면 보안 중요.
				}
			} else{
				done(null, false, {message: '가입되지 않은 회원입니다.'});
			}
		}catch(error){
			console.error(error);
			done(error);
		}
	}));
};