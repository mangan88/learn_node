const mongoose = require('mongoose');
const Store = mongoose.model('Store'); //Comes from the bottom of our Store.js model

exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index');
};

exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store' });
};

exports.createStore = async (req, res) => {
  // console.log(req.body); // Check out all the data in the request in the terminal!
  const store = new Store(req.body);
  await store.save();
  console.log(store);
  res.redirect('/');
};
