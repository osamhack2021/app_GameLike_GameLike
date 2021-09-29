const express = require('express');
const multer = require('multer');
const path = require('path');

const {Post, Hashtag, User} = require('../models');
const {isLoggedIn} = require('./middlewares');
const router = express.Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb){
            cb(null, 'uploads/');
        },
        filename(req, file, cb){
            const ext = path.extname(file.originalname);
            cb(null, path.basename(file.originalname, ext) + new Date().valueOf() + ext);
        },
    }),
    limit: {fileSize: 5*1024*1024},
});
router.post('/img', isLoggedIn, upload.single('img'), (req, res) => {
    console.log(req.body, req.file);
    res.json({url: '/img/${req.file.filename}' });
});
//img = input id = img html참고

const upload2 = multer();
router.post('/', isLoggedIn, upload2.none(), async (req,res, next)=>{
    //게시글 업로드
    try{
        const post = await Post.create({
            content: req.body.content,
            img: req.body.url,
            userId: req.user.id,
        });
        const hashtags = req.body.content.match(/#[^\s]*/g);
        if(hashtags){
            // 안녕하세요 #노드 #익스프레스
            //hashtags = {#노드, #익스프레스} 
            const result = await Promise.all(hashtags.map(tag=> Hashtag.findOrCreate({
                //DB에 있으면 찾고 없으면 새로 생성
                where: {title: tag.slice(1).toLowerCase() },
                //#떼고, 대소문자 구분x
            })));
            await post.addHashtags(result.map(r=> r[0]));
        }
        res.redirect('/');
    }catch(error){
        console.log(error);
        next(error);
    }
});
//사진을 안올릴경우

router.get('/hashtag', async(req, res, next) => {
    const query = req.query.hashtag;
    if(!query){
        return res.redirect('/');
    }
    try{
        const hashtag = await Hashtag.findAll( {where: {title: query} });
        let posts = [];
        if(hashtag){
            post = await hashtag.getPosts({include: [{model: User}]});
        }
        return res.render('main', {
            title: '${query} | NodeBird',
            user: req.user,
            twits: posts,
        });
    }catch(error){
        console.log(error);
        next(error);
    }
});

router.post('/:id/like', async(req, res, next) => {
    try{
        const post = await Post.findOne({ where : {id : req.user.id}});
        await post.addLiker(req.user.id);
        res.send('OK');
    }catch(error){
        console.error(error);
        next(error);
    }
});

router.delete('/:id/like', async (req, res, next) =>{
    try{
        const post = await Post.findOne({ where : {id : req.user.id}});
        await post.removeLiker(req.user.id);
        res.send('OK');
    }catch(error){
        console.error(error);
        next(error);
    }
});

/*{% set like = (twit) and (likerIdList.includes(req.User.id) ) %}
      {% if not like and user  %}
      <button class="like">좋아요</button>
      {% elif user and like %}
      <button class="unlike">좋아요 취소</button>
      {% endif %}*/

module.exports = router;