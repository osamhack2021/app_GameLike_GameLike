const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../models/user');
const Quest = require('../models/quest');
const Expected = require('../models/expected');
const Performed = require('../models/performed');
const Op = require('sequelize').Op;

const router = express.Router();

const expectedLimit = 20;

//1번 : O
//2번 : O
//3번 : O
//4번 : O
//5번 : O
//6번 : O

// 3번 Expected 생성
router.post('/createEx', async (req, res, next) => {
  const { 
    questName,
    hashTag,
    date,
    userId
  } = req.body;
  try {
    //const exQuest = await Expected.findOne({ where: { questName } });    
    const expected = await Expected.create({
      questName : questName,
      hashTag: hashTag,
      date: date,
      isPerformed: false,
      userId: userId,
    });
    res.json({
      message: "Expected Create SUCCESS!", success : true
    });
    //return res.redirect('/');
  } catch (error) {    
    console.error(error);
    res.json({
      message: "Expected Create FAILED!", success : false
    });
    //return next(error);
  }
});

//4번 Performed 생성 
router.post('/createPe', async (req, res, next) => {
  const { 
    questName,
    hashTag,
    date,
    startTime,
    endTime,
    detail,
    userId
  } = req.body;
  try {
    const performed = await Performed.create({
      questName : questName,
      hashTag: hashTag,
      date: date,
      startTime: startTime,
      endTime: endTime,
      detail: detail,
      isPerformed: false,
      userId: userId,
    });
    res.json({
      message: "Performed Create SUCCESS!", success : true, id: performed.id
    });
    //return res.redirect('/');
  } catch (error) {    
    console.error(error);
    res.json({
      message: "Perfomred Create FAILED!", success : false, id: -1
    });
    //return next(error);
  }
});

// 2번 Expected 20개 불러오기
router.get('/expected', async (req, res, next) => {
  try {
    const expected = await Expected.findAll({
      attributes: ['questName', 'hashTag', 'date'],
      order: [['createdAt', 'DESC']],
      limit: expectedLimit,
    });
    const data = JSON.stringify(expected);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.json(err);
    //next(err);
  }
});

// 1번 오늘의(date) Expected 불러오기
router.post('/expectedToday', async (req, res, next) => {
  const {date} = req.body;
  try {
    const expected = await Expected.findAll({
      where: {date : date},
      attributes: ['questName', 'hashTag', 'date'],
      order: [['createdAt', 'ASC']],
    });
    const data = JSON.stringify(expected);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.json(err);
    //next(err);
  }
});

// 5번 Performed endTime 수정
router.post('/updatePe', async(req, res, next) =>{ // 프로필 닉네임 수정예제
  const {userId, startTime, endTime} = req.body;
  try {
    // const performed = await Performed.update({where})
    await Quest.update({ endTime: req.body.endTime }, {
      where: { 
        userId: req.body.userId,
        startTime: startTime,
        endTime:{
          [Op.is] : null
        }
      }
    });
    res.json({
      message: "Performed Update SUCCESS!", success : true
    });
  } catch(error){
    console.log(error);
    res.json({
      message: "Performed Update FAILED!", success : false
    });
    // next(error);
  }
});

// 6번 performed endTime NULL인 값 가져오기
router.get('/performedE', async (req, res, next) => {
  try {
    const performed = await Performed.findAll({
      where: {endTime : NULL},
      attributes: ['questName', 'hashTag', 'date'],
      order: [['createdAt', 'ASC']],
    });
    const data = JSON.stringify(performed);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.json(err);
    //next(err);
  }
});

// peopleWith 프로토타입
router.get('/complete', async (req, res, next) => {
  const {hashTag} = req.body;
  try {
    const performed = await Performed.findAll({
      where: {hashTag : req.body.hashTag},
    });
    const length = performed.length;
    // const data = JSON.stringify(performed);
    res.json({peopleWith : length });
  } catch (err) {
    console.error(err);
    res.json(err);
    //next(err);
  }
});

// 퀘스트 삭제
/*router.delete('/:id', async (req, res, next) => {
    try{
        await Quest.destroy({ where: { id : req.params.id, UserId: req.user.id}});
        res.send('OK');
    } catch(error){
        console.error(error);
        next(error);
    }
});*/

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
