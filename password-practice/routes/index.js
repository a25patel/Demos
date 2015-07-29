var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/signup-demo');
var userCollection = db.get('users');
var bcrypt = require('bcryptjs');

/* GET home page. */
router.get('/', function(req, res, next) {
  userCollection.find({}, function(err, records){
    res.render('index', { title: 'Password Practice' , users: records });
 });
});

//POST account info
router.post('/signup', function(req,res,next){
  if( req.body.password === req.body.confirm){
    userCollection.insert({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password,8)
    });
  }
  res.redirect('/');
});

// GET login page with empty forms
router.get('/login', function(req,res,next){
  res.render('login');
});

router.get('/yay', function(req,res,next){
  res.render('yay');
});

router.get('/nay', function(req,res,next){
  res.render('nay');
});

//POST find user by email, match password, return yay/nay
router.post('/login', function(req,res,next){
  var array = [];
  userCollection.findOne({email:req.body.email}, function(err, records){
    if (bcrypt.compareSync(req.body.password, records.password) === true) {
      res.redirect('/yay');
    } else {
      res.redirect('/nay');
    }

  });
});


module.exports = router;
