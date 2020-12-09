const Group = require('../Models/Groups');
const mongoose = require('mongoose');

exports.addGroup = (req, res) => {

    Group.findOne({ groupID: req.body.groupID }, (err, group) => {
        if (err) {
            res.json({
                statusCode: 0,
                statusMessage: err.message
            })
        } else if (group) {
            res.json({
                statusCode: 0,
                statusMessage: 'Group already exists'
            })
        } else {
            const group = new Group({
                _id: new mongoose.Types.ObjectId(),
                groupID: req.body.groupID
            })

            group.save(err => {
                if (err) {
                    res.json({
                        statusCode: 0,
                        statusMessage: err.message
                    })
                } else {
                    res.json({
                        statusCode: 1,
                        statusMessage: 'Group added successfully'
                    })
                }
            })
        }
    })
}

exports.login = (req, res) => {
    Group.findOne({groupID: req.body.groupID}, (err, group) => {
        if(err) {
            res.json({
                statusCode: 0,
                statusMessage: err.message
            })
        } else if(group) {
            res.json({
                statusCode: 1,
                statusMessage: 'Success'
            })
        } else {
            res.json({
                statusCode: 0,
                statusMessage: 'Group not found'
            })
        }
    })
}
