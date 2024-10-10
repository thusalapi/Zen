const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    image: { type: String },
    about: { type: String },
    phone: { type: String },
    email: { type: String, required: true },
    availability: [{ type: String }]
});

module.exports = mongoose.model('Doctor', DoctorSchema);