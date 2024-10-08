import React from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import HistoryScreen from "@/components/professional/HistoryScreen";

export default function HistoryTab() {
  // Mock data for demonstration
  const historyData = {
    sessionsDone: 10,
    sessionsUpcoming: 3,
    appointments: [
      {
        name: "Dr. Avishka Senaretha",
        title: "Clinical Psychologist",
        organization: "Hemas",
        rating: 4.9,
        reviewCount: 1000,
        imageUri: "https://example.com/doctor1.jpg",
      },
      {
        name: "Dr. John Doe",
        title: "Clinical Psychologist",
        organization: "Hemas",
        rating: 4.9,
        reviewCount: 1000,
        imageUri: "https://example.com/doctor2.jpg",
      },
      {
        name: "Dr. Jane Smith",
        title: "Clinical Psychologist",
        organization: "Hemas",
        rating: 4.9,
        reviewCount: 1000,
        imageUri: "https://example.com/doctor3.jpg",
      },
    ],
  };

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <HistoryScreen {...historyData} />
    </View>
  );
}
