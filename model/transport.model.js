const mongoose = require("mongoose")

const transportSchema = new mongoose.Schema({
    itemName: {
        type: String,
        lowercase: true
    },
    qauntity: {
        type: Number
    },
    rate: {
        type: Number
    },
    from: {
        type: String
    },
    party: {
        type: String
    },
    balanceDue: {
        type: Number
    },
    to: {
        type: String
    },
    loadingCharge: {
        type: Number
    },
    fright: {
        type: Number
    },
    otherExpense: {
        type: String
    },
    remarks: {
        type: String
    },
    cgst: {
        type: Number
    },
    sgst: {
        type: Number
    },
    vehicleNo: {
        type: String
    },
    dataAdded: {
        type: Date
    },
    ownAmount: {
        type: String
    },
    ownDriverName: {
        type: String
    },
    ownDriverExpense: {
        type: String
    },
    otherAmount: {
        type: String
    },
    otherDriverName: {
        type: String
    },
    otherDriverExpense: {
        type: String
    }
}) 

module.exports = mongoose.model('Transport', transportSchema)