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
    editID = req.body.id;
    Jacket.findOne({ _id: editID }).then(function(result) {
      res.render('edit', { model: result })
    });
  },

  update: function(req, res) {
    let styleData = req.body.style;
    let brandData = req.body.brand;
    let colorData = req.body.color;
    let fabricData = req.body.fabric;
    let percentData = req.body.percent;

    console.log(editID);

    Jacket.findOne({ _id: editID }).then(function(result){
      if (styleData) {
        result.style = styleData
      } else if (brandData) {
        result.brand = brandData
      } else if (colorData) {
        result.color = [colorData]
      } else if (fabricData) {
        result.materials.fabric = fabricData
      } else if (percentData) {
        result.materials.percentage
      }
      result.save();
      res.redirect('/jackets');
    });
  },

  deleted: function(req, res) {
    let id = req.body.id;
    Jacket.remove({ _id: id }).then(function() {
      res.redirect('/jackets');
    });
  }

};
