const mongoose = require('mongoose');

const MoodSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Mood', MoodSchema);