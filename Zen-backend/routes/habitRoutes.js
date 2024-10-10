const express = require("express");
const { Habit } = require("../models/habit");
const router = express.Router();

// Get all habits for a given userId
router.get('/:userId', async (req, res) => {
  try {
    const habits = await Habit.find({ userId: req.params.userId });
    res.status(200).json(habits);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching habits', error });
  }
});

// POST route to create a new habit
router.post("/", async (req, res) => {
  console.log(req.body);
  const {
    habitName,
    selectedIcon,
    repeatType,
    selectedDays,
    timeOfDay,
    endHabit,
    endDateType,
    endDate,
    reminder,
    reminderTime,
    habitType,
    dateRange,
    userId,
  } = req.body;

  try {
    const newHabit = new Habit({
      habitName,
      selectedIcon,
      repeatType,
      selectedDays,
      timeOfDay,
      endHabit,
      endDateType,
      endDate,
      reminder,
      reminderTime,
      habitType,
      dateRange,
      userId, // Store the user ID in the habit document
    });

    const savedHabit = await newHabit.save();
    res.status(201).json(savedHabit);
  } catch (error) {
    res.status(500).json({ message: "Error creating habit", error });
  }
});

module.exports = router;
