module.exports = (app) => {
  const findAll = (req, res, next) => {
    app.services.upload.findAll()
      .then(result => res.status(200).json(result))
      .catch(err => next(err));
  };

  const remove = (req, res, next) => {
    app.services.upload.remove(req.params.id)
      .then(() => res.status(204).send())
      .catch(err => next(err));
  };

  const uploadFile = (req, res, next) => {
    return app.services.upload
      .saveFile(req.file)
      .then(result => res.status(200).json(result))
      .catch(err => next(err));
  };
  return { findAll, remove, uploadFile };
};
