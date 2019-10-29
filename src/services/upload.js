module.exports = (app) => {
  const findAll = () => {
    return app.db('uploads').select(['id', 'name', 'url']);
  };

  const remove = (id) => {
    return app.db('uploads')
      .where({ id })
      .del();
  };

  const saveFile = async (file) => {
    const newFile = { ...file };
    await app.db('uploads').insert({
      name: newFile.originalname,
      size: newFile.size,
      key: newFile.key,
      url: newFile.location,
      createAt: new Date(),
    });
    return newFile;
  };

  return { findAll, remove, saveFile };
};
