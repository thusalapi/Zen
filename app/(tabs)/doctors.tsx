import React from "react";
import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import DoctorsList from "@/components/professional/DoctorsList";

export default function DoctorsScreen() {
  return (
    <View style={styles.container}>
      <DoctorsList onNavigateBack={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E0FF", // Light purple background
    padding: 20,
  },
});
