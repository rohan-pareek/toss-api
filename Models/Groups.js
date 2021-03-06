const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    groupID: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Group', Schema);