const environment = 'development'
const knexConfig = require('./knexfile')[environment]
const knex = require('knex')(knexConfig)

module.exports = knex
