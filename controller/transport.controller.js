const Transport = require('../model/transport.model')

const addTransportBill = (req, res) => {
  try {
    const billData = req.body
    const transport = new Transport(billData)
    transport.save()
    return res.status(200).json({
      message: 'Data saved successfully',
      result: transport,
    })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

const getTransportBill = (req, res) => {
  Transport.find()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.json({ message: err.message })
    })
}

const updateTransportBill = (req, res) => {
  const billData = req.body
  const transport = new Transport({ _id: req.params.id, ...billData })
  Transport.updateOne({ _id: req.params.id }, transport)
    .then(() => {
      return res.status(200).json({ message: 'Updated successfully' })
    })
    .catch((err) => {
      return res.status(400).json({ message: err.message })
    })
}

const deleteTransportBill = (req, res) => {
  Transport.deleteOne({ _id: req.params.id })
    .then(() => {
      return res.status(200).json({ message: 'Removed Successfully' })
    })
    .catch((err) => {
      return res.status(400).json({ message: err.message })
    })
}

module.exports = {
  addTransportBill,
  getTransportBill,
  updateTransportBill,
  deleteTransportBill,
}
