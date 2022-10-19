const Transport = require('../model/transport.model')

const addTransportBill = async (req, res) => {
  try {
    const billData = req.body
    const transport = new Transport(billData)
    await transport.save()
    return res.status(200).json({
      message: 'Data saved successfully',
      result: transport,
    })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

const getTransportBill = async (req, res) => {
  try {
    const getBillData = await Transport.find().sort({dataAdded: -1})
    return res.status(200).json({
      message: 'Data fetched successfully',
      result: getBillData,
    })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

const updateTransportBill = async (req, res) => {
  try {
    const billData = req.body
    const transport = new Transport({ _id: req.params.id, ...billData })
    await Transport.updateOne({ _id: req.params.id }, transport)
    return res.status(200).json({ message: 'Updated Successfully' })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

const deleteTransportBill = async (req, res) => {
  try {
    await Transport.deleteOne({ _id: req.params.id })
    return res.status(200).json({ message: 'Removed Successfully' })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

module.exports = {
  addTransportBill,
  getTransportBill,
  updateTransportBill,
  deleteTransportBill
}
