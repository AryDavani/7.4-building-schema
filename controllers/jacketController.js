const Jacket = require('../models/jacket');

let editID = '';

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
    let fabricData = req.body.fabric;
    let percentData = req.body.percent;

    const jacket = new Jacket({
      style: styleData,
      brand: brandData,
      color: [colorData],
      materials: [{
        fabricType: fabricData,
        percentage: percentData
      }]
    });
    jacket.save();
    res.redirect('/');
  },

  edit: function(req, res) {
    newID = req.body.id;
    console.log(newID);
    res.render('edit');
  },

  update: function(req, res) {
    let styleData = req.body.style;
    let brandData = req.body.brand;
    let colorData = req.body.color;
    let fabricData = req.body.fabric;
    let percentData = req.body.percent;

    // Jacket.find({ _id: editID }, function(jacket) {
    //   jacket.style = styleData,
    //   jacket.brand = brandData,
    //   jacket.color = [colorData],
    //   jacket.materials.fabricType = fabricData,
    //   jacket.materials.percentage = percentData,
    //   jacket.save();
    // }).then(function() {
    //   res.redirect('/jackets');
    // });
    res.redirect('/jackets');
  },

  deleted: function(req, res) {
    let id = req.body.id;
    Jacket.remove({ _id: id }).then(function() {
      res.redirect('/jackets');
    });
  }

};
