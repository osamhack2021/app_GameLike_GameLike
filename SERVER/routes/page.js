const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

router.use((req, res, next) => {
  res.locals.user = null;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followerIdList = [];
  next();
});

// 프로필 페이지
router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile', { title: '내 정보 - NodeBird' });
});

//회원가입 페이지
router.get('/join', isNotLoggedIn, (req, res) => {
  res.render('join', { 
	  title: '회원가입 - NodeBird'/*,
	  user: req.user,
	  joinError : req.flash('joinError'),*/
  });
});

//메인 페이지
router.get('/', (req, res, next) => {
  const twits = [];
  res.render('main', {
    title: 'NodeBird',
    twits: [],
	user: req.user,
	loginError : req.flash('loginError'),
  });
});

module.exports = router;