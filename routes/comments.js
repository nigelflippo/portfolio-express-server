const knex = require('../knex')
const _ = {}

_.getAllComments = (req, res, next) => {
  return knex('comments')
    .orderBy('id', 'desc')
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      next(err)
    })
}
_.postComment = (req, res, next) => {
  const { name, company, comment, project_id } = req.body
  const newComment = {
    name,
    company,
    comment,
    project_id
  }
  knex('comments')
    .insert(newComment, '*')
    .then(data => {
      res.status(201).json(data)
    })
    .catch(err => {
      next(err)
    })
}

module.exports = _
