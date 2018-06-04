const express = require('express')
const router = express.Router()

const nodemailer = require('nodemailer')

const comments = require('./comments')

router.get('/comments', comments.getAllComments)
router.post('/comments', comments.postComment)

router.post('/send', (req, res, next) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth : {
      user: 'flippo.nigel@gmail.com',
      pass: 'isisosiris91!'
    }
  })
  const mailOptions = {
    from: 'flippo.nigel@gmail.com',
    to: 'flippo.nigel@gmail.com',
    subject: `${req.body.name}: ${req.body.phone}`,
    text: `${req.body.message}`,
    replyTo: `${req.body.email}`
  }
  transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.error('error', err)
    } else {
      console.log('email', res);
    }
  })
})

module.exports = router
