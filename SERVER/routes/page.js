const express = require('express');
const path = require('path');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Post, User } = require('../models');

router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.followerCount =  req.user ? req.user.Followers.length : 0;
  res.locals.followingCount = req.user ? req.user.Followings.length : 0;
  res.locals.followerIdList = req.user ? req.user.Followings.map(f=>f.id) : [];
  //res.locals.likerIdList = req.user ? req.twit.Liker.map(l => l.id) : [];
  next();
});

// 프로필 페이지
router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile', { title: '내 정보 - NodeBird' , user: req.user});
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

router.get('/.well-known/pki-validation', async (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, 
      "../public/.well-known/pki-validation/",
      "454C2FC0C7E5A6A778FBF0AB2D3932B3.txt"
    ));
  } catch (err) {
    console.error(err);
    next(err);
  }
}); 

router.get('/.well-known/acme-challenge/a53GU9kch6h_ktM35qi1hFz-tz8zwkUIpV683BD5NAk', async (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, 
      "../public/.well-known/acme-challenge/",
      "a53GU9kch6h_ktM35qi1hFz-tz8zwkUIpV683BD5NAk"
    ));
  } catch (err) {
    console.error(err);
    next(err);
  }
}); 
// router.get('/', async (req, res, next) => {
//   console.log(req.user);
//   const posts = await Post.findAll({
//     include: [{
//       model: User,
//       attributes: ['id', 'nick'],
//     }, {
//       model: User,
//       attributes: ['id', 'nick'],
//       as: 'Liker',
//     }],
//   })
//     .then((posts) => {
//       console.log(posts);
//       res.render('main', {
//         title: 'NodeBird',
//         twits: posts,
//         user: req.user,
//         loginError: req.flash('loginError'),
//       });
//     })
//     .catch((error) => {
//       console.error(error);
//       next(error);
//     });

// });

module.exports = router;