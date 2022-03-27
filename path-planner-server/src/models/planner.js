
const mongoose = require('mongoose')

const plannerSchema = new mongoose.Schema({
    course: String,
    info: String
})