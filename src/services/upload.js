// const aws = require('aws-sdk');
// const s3 = new aws.S3();

module.exports = (app) => {
  const findAll = () => {
    return app.db('uploads').select(['id', 'name', 'url']);
  };

  const remove = (id) => {
    // if (process.env.STORAGE_TYPE === 's3') {
    //   return s3.deleteObject({
    //     Bucket: 'upload-apptest',
    //     Key: key,
    //   }).promise();
    // }
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
      url: !newFile.location ? `${process.env.APP_URL}/files/${newFile.filename}` : newFile.location,
      createAt: new Date(),
    });
    return newFile;
  };

  return { findAll, remove, saveFile };
};
