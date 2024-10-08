// HabitProgress.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ProgressBar } from "react-native-paper";

interface HabitProgressProps {
  title: string;
  progress: number; // Percentage of completion
}

const HabitProgress: React.FC<HabitProgressProps> = ({ title, progress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ProgressBar
        progress={progress / 100}
        color="#3b5998"
        style={styles.progressBar}
      />
      <Text>{progress}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  progressBar: {
    height: 10,
    marginVertical: 5,
  },
});

export default HabitProgress;
