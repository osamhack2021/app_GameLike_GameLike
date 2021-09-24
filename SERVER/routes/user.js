const express = require('express');

const router = express.Router();
const {isLoggedIn} = require('./middlewares');
const { User } = require('../models');

router.post('/:id/follow', isLoggedIn, async(req, res, next) =>{
  try{
    const user = await User.find({where: {id : req.user.id}});
    await user.addFollowing(parseInt(req.params.id, 10));
    //req = 현재 로그인한 나, 를 찾아서 나의 팔로잉 대상에 추가
    res.send('success');
  }catch(error){
    console.error(error);
    next(error);
  }
});

module.exports = router;

// A.getB: 관계있는 로우 조회
// A.addB: 관계있는 생성
// A.setB: 관계있는 관계 수정
// A.removeB: 관계 제거
