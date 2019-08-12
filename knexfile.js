module.exports = {
  test: {
    client: 'pg',
    version: '10',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: '123',
      database: 'enli',
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};
