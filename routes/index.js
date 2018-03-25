var express = require('express');
var router = express.Router();
var cache = require('../services/cache')

async function processItems(arr) {
  arr.forEach((i) => {
    if (i.key && i.data) {
      cache.event(i.key, i.data);
    }
  });
}

router.post('/', async (req, res, next) => {
  let body = req.body;
  if (Array.isArray(body)) {
    processItems(body);
    res.json({ message: 'Building cache item(s).' })
  } else {
    res.status(400).json({ message: 'Data not formatted correctly.' })
  }
});

router.get('/:key', async (req, res) => {
  if (req.params.key) {
    let result = await cache.search(req.params.key)
    console.log(result);
    res.json(result);
  } else {
    res.status(400).json({ message: 'Missing parameters' });
  }


})

module.exports = router;
