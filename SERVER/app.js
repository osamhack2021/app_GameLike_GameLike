const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
const flash = require('connect-flash');
const passport = require('passport');
const https = require('https');
const fs = require('fs');
const cors = require('cors');

dotenv.config();
const pageRouter = require('./routes/page');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');
const questRouter = require('./routes/quest');
const { sequelize } = require('./models');
const passportConfig = require('./passport');

// const privateKey = fs.readFileSync('./keys/private.key', 'utf8');
// const certificate = fs.readFileSync('./keys/certificate.crt', 'utf8');
// const ca = fs.readFileSync('./keys/ca_bundle.crt', 'utf8');

const app = express();
passportConfig(); //패스포트 설정

app.set('port', process.env.PORT || 8001);
/*app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});*/
// 디버깅용 views html files

sequelize.sync({force:false})
	.then(()=>{
	console.log('데이터베이스 연결 성공');
})
	.catch((err)=>{
	console.error(err);
})

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'uploads'))); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));

app.use(flash());
app.use(passport.initialize()); 
app.use(passport.session());

app.use('/', pageRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/post', postRouter);
app.use('/quest', questRouter);

app.use((req, res, next) => {
  const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});

