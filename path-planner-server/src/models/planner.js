
const mongoose = require('mongoose')

const plannerSchema = new mongoose.Schema({
    className: String,
    buildingCode: String,
    time: {
        day: String,
        startTime: String,
        dayType: String
    }
})

mongoose.model('Planner', plannerSchema)