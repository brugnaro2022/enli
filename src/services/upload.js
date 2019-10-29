module.exports = (app) => {
  const saveFile = async (file) => {
    const newFile = { ...file };
    await app
      .db('uploads')
      .insert({
        name: newFile.originalname,
        size: newFile.size,
        key: newFile.filename,
        url: '',
        createAt: new Date(),
      });
    return newFile;
  };

  return { saveFile };
};
