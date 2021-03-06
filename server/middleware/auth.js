//로그인 되었는지, 권한이 있는지 체크 using token(cookie)
const { User } = require("../models/User");
//인증 처리
let auth = (req, res, next) => {
  //클라이언트 쿠키에서 토큰을 가져온다
  let token = req.cookies.x_auth;
  //토큰을 복호화 한 후 유저를 찾는다.
  let user = User.findByToken(token, (err, user) => {
    //유저가 있으면 인증 Okay, 없으면 No
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });
    //다음 콜백 함수에서 쓸 수 있도록
    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
