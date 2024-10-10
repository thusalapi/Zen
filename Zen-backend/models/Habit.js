const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema(
  {
    habitName: { type: String, required: true },
    selectedIcon: { type: String, required: true },
    repeatType: { type: String, required: true },
    selectedDays: { type: [String], required: false },
    timeOfDay: { type: String, required: true },
    endHabit: { type: Boolean, required: false },
    endDateType: { type: String, required: false },
    endDate: { type: Date, required: false },
    reminder: { type: Boolean, required: false },
    reminderTime: { type: String, required: false },
    habitType: { type: String, required: true },
    dateRange: {
      start: { type: String, required: false },
      end: { type: String, required: false },
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Ref to User model
  },
  { timestamps: true }
);

const Habit = mongoose.model("Habit", habitSchema);

exports.Habit = Habit;
