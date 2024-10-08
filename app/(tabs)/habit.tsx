import React from "react";
import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import SigninForm from "@/components/SignInForm";
import HabitsPage from "@/screens/HabbitPage";
import CreateHabit from "@/screens/CreateHabitPage";
import MyHabitsScreen from "@/screens/HabbitPage";
import GoalsScreen from "@/screens/GoalsScreen";

export default function HabitScreen() {
  return (
    <>
      <CreateHabit />
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
