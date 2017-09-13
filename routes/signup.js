var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/myappdb";



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('signup',{title:'Signup'});
});


/* get signup data */

router.post('/', function(req, res, next) {
	var name = req.body.name;
	var email = req.body.email;
	var user = req.body.username;
	var pwd = req.body.password;
  console.log(user,pwd,name,email);
  
  /*  storing data to database */

  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { name: name, email : email , user :user , pwd : pwd  };
  db.collection("users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
			/* back to login page*/
  res.render('login',{title:'login', msg:' You are successfully register',uname:name } );

  //res.redirect('/profiles')
  //res.redirect(url.format({
   //    pathname:"/profiles",
     //  query: {
       //   "username": user,
         // "name": pwd,
         // "valid":"your string here"
     //   }
 //  }));
  //res.render('profiles', { title: 'PROFILE', name:user });
});




/*    */

module.exports = router;
