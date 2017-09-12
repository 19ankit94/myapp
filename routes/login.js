var express = require('express');
var router = express.Router();
const url = require('url');

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login Page' });
});

/* POST login data */
router.post('/', function(req, res, next) {
	var user = req.body.username;
	var pwd = req.body.password;
  console.log(user,pwd);
  //res.redirect('/profiles')
  res.redirect(url.format({
       pathname:"/profiles",
       query: {
          "username": user,
          "name": pwd,
          "valid":"your string here"
        }
   }));
  //res.render('profiles', { title: 'PROFILE', name:user });
});

module.exports = router;
