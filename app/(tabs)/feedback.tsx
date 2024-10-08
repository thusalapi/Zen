import React from "react";
import { View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import FeedbackScreen from "@/components/professional/FeedbackScreen";

export default function FeedbackTab() {
  const params = useLocalSearchParams();
  const doctorId = params.doctorId as string;

  // In a real app, you'd fetch the doctor's details using the doctorId
  // For this example, we'll use mock data
  const doctorDetails = {
    name: "Dr. Avishka Senaretha",
    title: "Clinical Psychologist",
    organization: "Hemas",
    rating: 4.9,
    reviewCount: 1000,
    imageUri: "https://example.com/doctor-image.jpg",
  };

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <FeedbackScreen doctor={doctorDetails} />
    </View>
  );
}
