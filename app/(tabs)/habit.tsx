import React from "react";
import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import SigninForm from "@/components/SignInForm";
import HabitsPage from "@/screens/HabbitPage";

export default function HabitScreen() {
  return (
    <View style={styles.container}>
      <HabitsPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E0FF",
    padding: 20,
  },
});
