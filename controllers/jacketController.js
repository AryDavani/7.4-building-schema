const Jacket = require('../models/jacket');

module.exports = {
  list: function(req, res) {
    Jacket.find().then(function(results) {
      res.render('collection', { model: results })
    });
  },
  home: function(req, res) {
    res.render('add');
  },
  add: function(req, res) {
    let styleData = req.body.style;
    let brandData = req.body.brand;
    let colorData = req.body.color;

    const jacket = new Jacket({
      style: styleData,
      brand: brandData,
      color: [colorData]
    });
    jacket.save();
    res.redirect('/');
  },
  material: function(req, res) {
    res.render('materials');
  },


}
