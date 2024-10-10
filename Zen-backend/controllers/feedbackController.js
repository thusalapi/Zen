const Feedback = require('../models/Feedback');
const Doctor = require('../models/Doctor');

exports.getAllFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.find().populate('doctor', 'name specialty');
        res.json(feedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getFeedbackById = async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id).populate('doctor', 'name specialty');
        if (!feedback) return res.status(404).json({ message: 'Feedback not found' });
        res.json(feedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createFeedback = async (req, res) => {
    const feedback = new Feedback(req.body);
    try {
        const newFeedback = await feedback.save();

        // Update doctor's rating and reviews count
        const doctor = await Doctor.findById(newFeedback.doctor);
        doctor.rating = ((doctor.rating * doctor.reviews) + newFeedback.rating) / (doctor.reviews + 1);
        doctor.reviews += 1;
        await doctor.save();

        res.status(201).json(newFeedback);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateFeedback = async (req, res) => {
    try {
        const updatedFeedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFeedback) return res.status(404).json({ message: 'Feedback not found' });
        res.json(updatedFeedback);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.findByIdAndDelete(req.params.id);
        if (!feedback) return res.status(404).json({ message: 'Feedback not found' });
        res.json({ message: 'Feedback deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};