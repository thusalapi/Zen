import React from "react";
import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import GoalsPage from "@/components/habit/GoalsPage";

export default function SigninScreen() {
  return (
    <>
      <GoalsPage />
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
