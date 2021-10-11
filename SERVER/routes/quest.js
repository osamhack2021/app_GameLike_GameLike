const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../models/user');
const Quest = require('../models/quest');
const expectedQuest = require('../models/expectedquest');
const performedQuest = require('../models/performedquest');

const router = express.Router();

//퀘스트 생성
router.post('/create', async (req, res, next) => {
  const { 
    name,
    date,
  } = req.body;
  try {
    const exQuest = await expectedQuest.findOne({ where: { name } });    
    await Quest.create({
      name,
      date,
      isPerformed: false,
      creatorId: 44445,
    });
    //return res.redirect('/');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

//자신의 퀘스트 전부 불러오기
router.get('/', async (req, res, next) => {
  try {
    const exQuests = await expectedQuest.findAll({
      attributes: ['name', 'date'],
      // include: {
      //    model: User,
      //    attributes: ['id', 'nick'],
      // },
       order: [['createdAt', 'DESC']],
    });
    res.send(quests);
  } catch (err) {
    console.error(err);
    next(err);
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
