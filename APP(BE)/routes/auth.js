const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../models/user');

const router = express.Router();

router.post('/join', isNotLoggedIn, async (req, res, next) => {
  const { email, nick, password, enlistDate, dischargeDate } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
		res.send({message: '이미 존재하는 회원입니다', isExist: true});
    }
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      email,
      nick,
      password: hash,
	  enlistDate,
	  dischargeDate,
	  exp : 30,
	  level : 1
    });
	res.send({message: '회원가입을 축하드립니다!', isExist: false});
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.get('/join', async(req, res, next) => {
	const { email, password } = req.body;
    try {
		const exUser = await User.findOne({ where: { email } });
		res.json({email : exUser.email, password : exUser.password});
	  } catch (error) {
		console.error(error);
		return next(error);
	  }
});

router.post('/profiles', isLoggedIn, async (req, res, next) => {
	const { email } = req.body;
	try {
	  const exUser = await User.findOne({ where: { email } 
	});
	  if (exUser) {		
		const data = JSON.stringify(exUser);
		res.json(data);
	  }
	  else{
		const data = JSON.stringify(exUser);
		res.json(data);
	  }
	} catch (err) {
	  console.log(err);
	  next(err);
	}
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
		res.send(false);
    }
    return req.login(user, async (loginError) => {
      if (loginError) {
        console.error(loginError);
		res.send(false);
      }
	  else{
	  	res.send(true);
	  }
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

// GET /auth/logout
router.get('/logout', isLoggedIn, (req, res)=>{
	req.logout(); // req에서 지워준다
	req.session.destroy(); // 세션 지우기
	res.send(true);
	//res.redirect('/');
});

// (1)
router.get('/kakao', passport.authenticate('kakao'));

// (3)
router.get('/kakao/callback', passport.authenticate('kakao', {
	failureRedirect: '/',
}), (req, res) =>{
	res.redirect('/');
});

module.exports = router;