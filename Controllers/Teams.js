const Team = require('../Models/Teams');
const mongoose = require('mongoose');

exports.pinTeams = (req, res) => {
    Team.findOne({groupID: req.body.groupID}, (err, team) => {
        if(err) {
            res.json({
                statusCode: 0,
                statusMessage: err.message
            })
        } else if(team) {
            const doc = {
                teamA: req.body.teamA,
                teamB: req.body.teamB,
                common: req.body.common
            }
            Team.updateOne({groupID: req.body.groupID}, doc, (err, raw) => {
                if(err) {
                    res.json({
                        statusCode: 0,
                        statusMessage: err.message
                    })
                } else {
                    res.json({
                        statusCode: 1,
                        statusMessage: 'Teams pinned successfully'
                    })
                }
            })
        } else {
            const team = new Team({
                _id: new mongoose.Types.ObjectId(),
                groupID: req.body.groupID,
                teamA: req.body.teamA,
                teamB: req.body.teamB,
                common: req.body.common
            })

            team.save(err => {
                if (err) {
                    res.json({
                        statusCode: 0,
                        statusMessage: err.message
                    })
                } else {
                    res.json({
                        statusCode: 1,
                        statusMessage: 'Teams pinned successfully'
                    })
                }
            })
        }
    })
}

exports.fetchPinnedTeams = (req, res) => {
    Team.find({groupID: req.body.groupID}, (err, teams) => {
        if(err) {
            res.json({
                statusCode: 0,
                statusMessage: err.message
            })
        } else {
            res.json({
                statusCode: 1,
                data: teams
            })
        }
    })
}