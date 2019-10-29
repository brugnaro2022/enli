const multer = require('multer');
const multerConfig = require('../config/multer');

const multerUpload = multer(multerConfig).single('file');

module.exports = (app) => {
  app.route('/auth/uploads/:id')
    .delete(app.routes.upload.remove);

  app.route('/auth/uploads')
    .get(app.routes.upload.findAll);

  app.route('/auth/upload')
    .post(multerUpload, app.routes.upload.uploadFile);

  app.route('/auth/signin')
    .post(app.routes.auth.signin);

  app.route('/auth/signup')
    .post(app.routes.users.create);

  app.route('/users')
    .all(app.config.passport.authenticate())
    .get(app.routes.users.findAll)
    .post(app.routes.users.create);

  app.route('/accounts')
    .all(app.config.passport.authenticate())
    .get(app.routes.accounts.getAll)
    .post(app.routes.accounts.create);

  app.route('/accounts/:id')
    .all(app.config.passport.authenticate())
    .get(app.routes.accounts.get)
    .put(app.routes.accounts.update)
    .delete(app.routes.accounts.remove);
};
