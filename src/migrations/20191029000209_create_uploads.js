exports.up = (knex) => {
  return knex.schema.createTable('uploads', (t) => {
    t.increments('id').primary();
    t.string('name');
    t.string('size');
    t.string('key');
    t.string('url');
    t.string('createAt');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('uploads');
};
