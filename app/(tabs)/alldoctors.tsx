import React from "react";
import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import AllDoctorsScreen from "@/components/professional/AllDoctorsScreen";

export default function AllDoctors() {
  return (
    <View style={styles.container}>
      <AllDoctorsScreen navigation={{ goBack: () => router.back() }} />
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
