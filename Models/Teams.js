const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    groupID: {
        type: String,
        required: true
    },
    teamA: {
        type: Array,
        required: true
    },
    teamB: {
        type: Array,
        required: true
    },
    common: {
        type: String
    }
})

module.exports = mongoose.model('Team', Schema);