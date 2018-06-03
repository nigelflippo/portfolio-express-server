exports.seed = (knex, Promise) => {
  return knex('comments').del()
}
