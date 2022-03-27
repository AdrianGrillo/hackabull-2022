
const mongoose = require('mongoose')

const plannerSchema = new mongoose.Schema({
    //change, variables in wrong model file 
    className: String,
    buildingCode: String,
    time: {
        day: String,
        startTime: String,
        dayType: String
    }
})

mongoose.model('Planner', plannerSchema)