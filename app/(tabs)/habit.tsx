import React from "react";
import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import HabitPage from "@/components/habit/HabitPage";
import HabitsAndGoalsScreen from "@/components/habit/HabitsAndGoalsScreen";
import CreateNewHabitForm from "@/components/habit/CreateNewHabitForm";
import RemindersScreen from "@/components/habit/ReminderScreen";
import HabitNavigation from "@/components/habit/HabitNavigation";

export default function SigninScreen() {
  return (
    <>
      <HabitNavigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E0FF",
    padding: 20,
  },
});
