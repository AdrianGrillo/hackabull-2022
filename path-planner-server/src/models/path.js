const mongoose = require('mongoose')

const pointSchema = new mongoose.Schema({
    className: String,
    buildingCode: String,
    day: String,
    startTime: String,
    dayType: String
})

let userIn = [pointSchema.className, pointSchema.buildingCode, pointSchema.day,
              pointSchema.startTime, pointSchema.dayType];
let inOrder = [];


const trackSchema = new mongoose.Schema({
    // userId will refer to the id of a User model that's stored in the db.
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        default: ''
    },
    locations: [pointSchema]
})

mongoose.model('Track', trackSchema)