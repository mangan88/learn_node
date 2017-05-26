const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const chris  ={ name: 'Chris', age: 32, cool: true };
  // res.send('Hey! It works!');
  // res.json(chris);
  // res.send(req.query.name);
  //res.json(req.query);
  res.render('hello', {
    name: 'Chris',
    cat: req.query.cat,
    title: 'I love food'
  });
});

router.get('/reverse/:name',(req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
