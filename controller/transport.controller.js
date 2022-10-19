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
  try {
    const getBillData = Transport.find()
    return res.status(200).json({
      message: 'Data fetched successfully',
      result: getBillData,
    })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

const updateTransportBill = (req, res) => {
  try {
    const billData = req.body
    const transport = new Transport({ _id: req.params.id, ...billData })
    Transport.updateOne({ _id: req.params.id }, transport)
    return res.status(200).json({ message: 'Updated Successfully' })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

const deleteTransportBill = (req, res) => {
  try {
    Transport.deleteOne({ _id: req.params.id })
    return res.status(200).json({ message: 'Removed Successfully' })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

module.exports = {
  addTransportBill,
  getTransportBill,
  updateTransportBill,
  deleteTransportBill,
}
