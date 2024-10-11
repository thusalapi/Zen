const Mood = require('../models/moodModel');

// Get all moods
exports.getAllMoods = async (req, res) => {
    try {
        const moods = await Mood.find();
        res.status(200).json({
            status: 'success',
            results: moods.length,
            data: {
                moods
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Get a single mood by ID
exports.getMood = async (req, res) => {
    try {
        const mood = await Mood.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                mood
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Create a new mood
exports.createMood = async (req, res) => {
    try {
        const newMood = await Mood.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                mood: newMood
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Update a mood by ID
exports.updateMood = async (req, res) => {
    try {
        const mood = await Mood.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                mood
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Delete a mood by ID
exports.deleteMood = async (req, res) => {
    try {
        await Mood.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};