var express = require('express');
var router = express.Router();
const fun = require('../public/javascripts/function.js');

/**
 * @path {GET} http://localhost:3000
 * @description 메인
 */
router.get('/', (req, res, next) => {
  res.send('Bamboosoop');
});


/**
 * @path {GET} http://localhost:3000/api/user
 * @description 랭킹 정보 반환 API
 */
router.get('/api/user', (req, res, next) => {
  fun.test();
  res.json({
    result: 'ok',
    user: {
      '1': 'wang',
      '2': 'taek'
    }
  })
});

module.exports = router;
