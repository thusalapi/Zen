const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
    exerciseName: { type: String, required: true },
    duration: { type: String, required: true },
});

module.exports = mongoose.model('Exercise', ExerciseSchema);