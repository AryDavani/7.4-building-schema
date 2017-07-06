const jacketController = require('../controllers/jacketController');

module.exports = function(app) {
  app.get('/', jacketController.home);
  app.get('/jackets', jacketController.list);
  app.post('/add', jacketController.add);
  app.post('/delete', jacketController.deleted);
  app.post('/edit', jacketController.edit);
  app.post('/update', jacketController.update);

};
