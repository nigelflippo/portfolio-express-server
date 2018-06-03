exports.up = (knex, Promise) => {
  return knex.schema.createTable('comments', t => {
    t.increments()
    t.string('name').notNullable()
    t.string('company').notNullable().defaultsTo('')
    t.text('comment').notNullable().defaultsTo('')
    t.integer('project_id').notNullable()
    t.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
    t.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'))
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('comments')
}
