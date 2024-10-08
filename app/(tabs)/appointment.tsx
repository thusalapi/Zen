import React from "react";
import { View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import AppointmentScreen from "@/components/professional/AppointmentScreen";

export default function AppointmentTab() {
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
      <AppointmentScreen doctor={doctorDetails} />
    </View>
  );
}

export function AppointmentConfirmation() {
  // You can implement a confirmation screen here if needed
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerTitle: "Appointment Confirmed",
        }}
      />
      {/* Add your confirmation screen content here */}
    </View>
  );
}
