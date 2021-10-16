const express = require('express');
const path = require('path');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Post, User } = require('../models');
const Quest = require('../models/quest');
const Expected = require('../models/expected');
const Performed = require('../models/performed');
const Sequelize = require('sequelize');

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
    const exQuests = await Expected.findAll({
      // include: {
      //    model: User,
      //    attributes: ['id', 'nick'],
      // },
      // order: [['createdAt', 'DESC']],
    });
    if (exQuests.length == 0) {
      isExists = false;
    }
    res.json({ isExists: isExists, Expected: exQuests });
  } catch (err) {
    console.error(err);
    next(err);
  }
});
// 프로필 페이지
router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile', { title: '내 정보 - NodeBird', user: req.user });
});

// 테스트용 프로필 페이지, 상단 정보 리턴
router.post('/profiles', /*isLoggedIn,*/ async (req, res, next) => {
  const { email } = req.body;
  try {
    const exUser = await User.findOne({ 
      where: { email: req.body.email },
      attributes: [
        'nick', 'dischargeDate', 'exp', 'level',
        [Sequelize.literal('RANK() OVER (ORDER BY exp))'), 'rank']
      ], // (순위)
    });
    const data = JSON.stringify(exUser);
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
    //console.log(posts.length);
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