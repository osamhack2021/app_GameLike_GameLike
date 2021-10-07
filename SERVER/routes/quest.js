const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../models/user');
const Quest = require('../models/quest');

const router = express.Router();

//퀘스트 생성
router.post('/create', isLoggedIn, async (req, res, next) => {
  const { 
    name, 
    fieldId,
    estimatedTime,
    isRepeat,
    isPublic
  } = req.body;
  try {
    const exQuest = await User.findOne({ where: { name } });
    // 퀘스트 제목으로 찾는 기존 퀘스트 있는지
    if (exUser) {
      return res.redirect('/quest');
    }
    const hash = await bcrypt.hash(password, 12);
    await Quest.create({
      name,
      fieldId,
      estimatedTime,
      createdDate : Sequelize.Now(),
      creatorId : 1,
      isRepeat,
      isPublic,
    });
    //return res.redirect('/');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

// 퀘스트 삭제
router.delete('/:id', async (req, res, next) => {
    try{
        await Quest.destroy({ where: { id : req.params.id, UserId: req.user.id}});
        res.send('OK');
    } catch(error){
        console.error(error);
        next(error);
    }
});

/*
// 퀘스트 수정
router.post('/edit', async(req, res, next) =>{ // 프로필 닉네임 수정예제
  try {
    await Quest.update({ nick: req.body.nick }, {
      where: { id: req.user.id },
    })
    res.redirect('/quest');
  } catch(error){
    console.log(error);
    next(error);
  }
});
*/

module.exports = router;