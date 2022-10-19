const express = require('express')
const {
  addTransportBill,
  getTransportBill,
  updateTransportBill,
  deleteTransportBill,
} = require('../controller/transport.controller')

const router = express.Router()

router.post('/addbill', addTransportBill)
router.get('/getbill', getTransportBill)
router.put('/updatebill/:id', updateTransportBill)
router.delete('/deletebill/:id', deleteTransportBill)

module.exports = router
