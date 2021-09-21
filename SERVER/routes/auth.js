const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const {isLoggedIn, isNotLoggedIn} = require('./middlewares');
const { User} = require('../models/user');

const router = express.Router();
// router.get(미들웨어1, 미들웨어2, 미들웨어3)
// POST /auth/join
router.post('/join', isNotLoggedIn, async (req, res, next) => {
	const { email, nick, password } = req.body;
	try{
		const exUser = await User.findOne({where : { email } });
		if(exUser){
			req.flash('joinError', '이미 가입된 이메일입니다.');
			return res.redirect('/join');
		}
		//console.time('암호화시간');
		const hash = await bcrypt.hash(password, 12);
		//console.timeEnd('암호화시간');
		await User.create({
			email,
			nick,
			password : hash,
		});
		return res.redirect('/');
	} catch(error){
		console.error(error);
		next(error);
	}
});

router.post('/login', isNotLoggedIn, (req, res, next) =>{ // req.body.email, req.body.password
	// done 에러 성공 실패 그대로 authError, user, info 전달
	passport.authenticate('local', (authError, user, info) =>{
		if(authError){
			console.error(authError);
			return next(authError);
		}
		if(!user){
			req.flash('loginError', info.message);
			return res.redirect('/');
		}
		return req.login(user, (loginError)=>{ //req.user 저장되니까(밑)
			if(loginError){
				console.error(loginError);
				return next(loginError);
			}
			return res.redirect('/');
		})
		
	})(req, res, next);
});

// GET /auth/logout
router.get('/logout', isLoggedIn, (req, res)=>{
	req.logout(); // req에서 지워준다
	res.session.destroy(); // 세션 지우기
	res.redirect('/');
});

module.exports = router;