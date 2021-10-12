const express = require('express');
const path = require('path');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Post, User } = require('../models');
const Quest = require('../models/quest');
const expectedQuest = require('../models/expectedquest');
const performedQuest = require('../models/performedquest');

router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.followerCount = req.user ? req.user.Followers.length : 0;
  res.locals.followingCount = req.user ? req.user.Followings.length : 0;
  res.locals.followerIdList = req.user ? req.user.Followings.map(f => f.id) : [];
  //res.locals.likerIdList = req.user ? req.twit.Liker.map(l => l.id) : [];
  next();
});

router.get('/home', async (req, res, next) => {
  try {
    const isExists = true;
    const exQuests = await expectedQuest.findAll({
      // include: {
      //    model: User,
      //    attributes: ['id', 'nick'],
      // },
      // order: [['createdAt', 'DESC']],
    });
    if (exQuests.length == 0) {
      isExists = false;
    }
    res.json({ isExists: isExists, expectedQuest: exQuests });
  } catch (err) {
    console.error(err);
    next(err);
  }
});
// 프로필 페이지
router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile', { title: '내 정보 - NodeBird', user: req.user });
});

// 테스트용 프로필 페이지
router.get('/profiles', /*isLoggedIn,*/ async (req, res, next) => {
  const { email } = req.body;
  try {
    const User = await User.findOne({ where: { email } 
    attributes: ['name', 'exp'], // 수정필요
    });
    const data = JSON.stringify(User);
    res.json(data);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// 랭킹 페이지
router.get('/rank',/*isLoggedIn,*/ async (req, res, next) => {
  const { email } = req.body;
  try {
    const exUser = await User.findAll({
      attributes: ['name', 'date'],
       order: [['exp', 'DESC']],
    });
    const data = JSON.stringify(exUser);
    res.json(data);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

//회원가입 페이지
router.get('/join', isNotLoggedIn, (req, res) => {
  res.render('join', {
    title: '회원가입',
    user: req.user,
    joinError: req.flash('joinError'),
  });
});

//메인 페이지
router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      include: {
        model: User,
        attributes: ['id', 'nick'],
      },
      order: [['createdAt', 'DESC']],
    });
    res.render('main', {
      title: 'NodeBird',
      twits: posts,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;