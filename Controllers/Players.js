const Player = require('../Models/Players');
const mongoose = require('mongoose');

exports.addPlayer = (req, res) => {

    Player.findOne({ player: new RegExp('^' + req.body.player + '$', 'i'), groupID: req.body.groupID }, (err, player) => {
        if (err) {
            res.json({
                statusCode: 0,
                statusMessage: err.message
            })
        } else if (player) {
            res.json({
                statusCode: 0,
                statusMessage: 'Player already exists'
            })
        } else {
            const player = new Player({
                _id: new mongoose.Types.ObjectId(),
                groupID: req.body.groupID,
                player: req.body.player
            })

            player.save(err => {
                if (err) {
                    res.json({
                        statusCode: 0,
                        statusMessage: err.message
                    })
                } else {
                    res.json({
                        statusCode: 1,
                        statusMessage: 'Player added successfully'
                    })
                }
            })
        }
    })
}

exports.deletePlayer = (req, res) => {
    Player.deleteOne({ _id: req.body.playerID }, (err) => {
        if (err) {
            res.json({
                statusCode: 0,
                statusMessage: err.message
            })
        } else {
            res.json({
                statusCode: 1,
                statusMessage: 'Player deleted successfully'
            })
        }
    })
}

exports.fetchPlayers = (req, res) => {
    Player.find({groupID: req.body.groupID}, (err, players) => {
        if(err) {
            res.json({
                statusCode: 0,
                statusMessage: err.message
            })
        } else {
            res.json({
                statusCode: 1,
                data: players
            })
        }
    })
}
