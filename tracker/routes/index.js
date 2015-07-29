var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var key = process.env.PIVOTAL_API;

/* GET home page. */
router.get('/', function(req, res, next) {
  unirest.get('https://www.pivotaltracker.com/services/v5/projects/1374606/stories').header('X-TrackerToken', key).end(function (response) {
      res.render('index', { title: 'Personal Project Stories' , foobars: response.body} );
    });
});

router.post('/add', function(req,res,next){
  console.log(req.body);
  unirest.post('https://www.pivotaltracker.com/services/v5/projects/1374606/stories')
    .header('X-TrackerToken', key)
    .send({
      'name': req.body.name,
      'estimate': req.body.estimate,
      'current_state': req.body.state
    })
    .end(function(response){
      res.redirect('/');
  });
});
module.exports = router;
