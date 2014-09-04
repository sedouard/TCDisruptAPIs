var express = require('express');

// Create an new Express Router
var router = express.Router();

//add middleware to check for an API key for any request
//to this route 
router.use(function(req, res, next){

  if(!req.query.api_key){
    return res.send({message:'Must have API key ' } );
  }
  
  //check if this API key is 'valid'
  //in a real scenario you would check this against
  //a data source such as a file, cache or database
  if(req.query.api_key != '12345'){
    return res.send({message:'Invalid API key'});
  }

});

// Set the GET HTTP verb handler for '/demo' paths on this route.
router.get('/demo', function(req, res) {
  //send a simple message
  console.log('ahhh!!!');
  res.send({message:'Just created an API in 5 minutes!'});
});

//expose this module's router to be used by the application
module.exports = router;
