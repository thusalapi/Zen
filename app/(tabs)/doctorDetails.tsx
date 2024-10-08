import React from "react";
import { StyleSheet, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import DoctorDetails from "@/components/professional/doctorDetails";

export default function DoctorDetailsScreen() {
  const params = useLocalSearchParams();
  const doctorId = params.id as string;

  // You would typically fetch doctor details based on the ID here
  const doctorDetails = {
    id: 1,
    name: "Dr. Avishka Senaretha",
    title: "Clinical Psychologist",
    organization: "Hemas",
    rating: 4.9,
    reviewCount: 1000,
    about:
      "Dr. Avishka is a seasoned Clinical Psychologist specializing in Cognitive Behavioral Therapy (CBT) and Mindfulness-Based Stress Reduction (MBSR). She has worked with a diverse range of patients dealing with anxiety, depression, and stress-related disorders.",
    services: [
      "Individual Therapy (In-Person or Online)",
      "Group Therapy (CBT Sessions)",
      "Emergency Consultations",
    ],
    contactInfo: {
      phone: "+1-234-567-890",
      email: "dr.emily.carter@mentalwellness.com",
    },
    availability: {
      weekdays: "9:00 AM - 5:00 PM",
      saturday: "10:00 AM - 2:00 PM",
    },
  };

  return (
    <View style={styles.container}>
      <DoctorDetails {...doctorDetails} onNavigateBack={() => router.back()} />
    </View>
  );
}

export function BookAppointment() {
  const params = useLocalSearchParams();
  const doctorId = params.id as string;

  return (
    <View style={styles.container}>
      {/* Implement your booking screen here */}
      {/* You can use the doctorId to fetch relevant booking information */}
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
