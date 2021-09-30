const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Post, User } = require('../models');

router.use((req, res, next) => {
  res.locals.user =null;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followerIdList = [];
  next();
});

// 프로필 페이지
router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile', { title: '내 정보 - NodeBird' , user: req.user});
});

//회원가입 페이지
router.get('/join', isNotLoggedIn, (req, res) => {
  res.render('join', {
    title: '회원가입 - GameLike'/*,
	  user: req.user,
	  joinError : req.flash('joinError'),*/
  });
});

//메인 페이지
router.get('/', async (req, res, next) => {
  console.log(req.user);
  const posts = await Post.findAll({
    include: [{
      model: User,
      attributes: ['id', 'nick'],
    }, {
      model: User,
      attributes: ['id', 'nick'],
      as: 'Liker',
    }],
  })
    .then((posts) => {
      console.log(posts);
      res.render('main', {
        title: 'NodeBird',
        twits: posts,
        user: req.user,
        loginError: req.flash('loginError'),
      });
    })
    .catch((error) => {
      console.error(error);
      next(error);
    });

});

module.exports = router;