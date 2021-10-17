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
      return res.redirect('/join?error=exist');
    }
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      email,
      nick,
      password: hash,
	  enlistDate,
	  dischargeDate,
	  exp : 16,
	  level : 1
    });
    return res.redirect('/');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.get('/join', async(req, res, next) => {
	const { email, password } = req.body;
	// const email = "a@n.n"
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
		res.json('no user founded');
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

router.post('/login', /*isNotLoggedIn,*/ (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
		res.send(false);
		//return res.redirect(`/?loginError=${info.message}`);
    }
    return req.login(user, async (loginError) => {
      if (loginError) {
        console.error(loginError);
		//res.send(false);
        //return next(loginError);
      }
	  else{
		//   try{
		// 	  const exUser = await User.findAll({});
		// 	  const data = JSON.stringify(exUser);
		// 	  res.send(data);
		//   } catch(error){
		// 	  console.log(error);
		// 	  next(error);
		//   }	
		  
	  	res.send(true);
	  }
      //return res.redirect('/');
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
/*const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');
const User = require('../models/user');

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
		return next(error);
	}
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
	passport.authenticate('local', (authError, user, info) => {
	  if (authError) {
		console.error(authError);
		return next(authError);
	  }
	  if (!user) {
		return res.redirect(`/?loginError=${info.message}`);
	  }
	  return req.login(user, (loginError) => {
		if (loginError) {
		  console.error(loginError);
		  return next(loginError);
		}
		return res.redirect('/');
	  });
	})(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

// GET /auth/logout
router.get('/logout', isLoggedIn, (req, res)=>{
	req.logout(); // req에서 지워준다
	req.session.destroy(); // 세션 지우기
	res.redirect('/');
});

module.exports = router;*/
