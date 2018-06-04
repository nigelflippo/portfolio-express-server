const express = require('express')
const router = express.Router()

const nodemailer = require('nodemailer')

const comments = require('./comments')

router.get('/comments', comments.getAllComments)
router.post('/comments', comments.postComment)

module.exports = router
