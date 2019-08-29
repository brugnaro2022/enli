module.exports = {
  test: {
    client: 'pg',
    version: '9.5',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '123',
      database: 'enli',
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};
