var express = require('express');
var router = express.Router();
var cache = require('../services/cache')

/* GET home page. */
router.post('/', async (req, res, next) => {
  let message;
  let body = req.body;
  console.log(body);
  cache.event('index', body.key, body.data);
  message = 'collating cache item';

  res.json({message: message})
});

router.get('/:key', async (req, res)=>{
  let result = await cache.search('index', req.params.key)
  console.log(result);
  res.json(result.data);
  
})

module.exports = router;
