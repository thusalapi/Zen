const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    patientName: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    status: { type: String, enum: ['scheduled', 'completed', 'cancelled'], default: 'scheduled' }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);