
const mongoose = require('mongoose')

const plannerSchema = new mongoose.Schema({
    course: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: false
    }
})

mongoose.model('Planner', plannerSchema)