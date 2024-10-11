import React from "react";
import MoodNavigation from "@/components/moodboard/MoodNavigation";
import { StyleSheet, View } from "react-native";

export default function moodscreen() {
  return (
    <>
      <MoodNavigation />
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
