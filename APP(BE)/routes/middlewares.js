exports.isLoggedIn = (req, res, next)=>{
	if(req.isAuthenticated()){ // 로그인 성공 여부 알려줌
		next();
	} else {
		res.status(403).send('로그인 필요');
	}
};

exports.isNotLoggedIn = (req, res, next) =>{ // 로그인 실패 여부 알려줌
	if(!req.isAuthenticated()){
		next();
	} else {
		res.redirect('/');
	}
};