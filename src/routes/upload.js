module.exports = (app) => {
  const uploadFile = (req, res, next) => {
    return app.services.upload
      .saveFile(req.file)
      .then(result => res.status(200).json(result))
      .catch(err => next(err));
  };
  return { uploadFile };
};
