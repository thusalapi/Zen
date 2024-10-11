import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useDoctors } from "@/hooks/useDoctors";

export default function DoctorDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { doctors, loading, error } = useDoctors();

  const doctor = doctors.find((d) => d.id === id);

  if (loading) {
    return (
      <View>
        <Text>Loading doctors...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  if (!doctor) return <Text>Doctor not found</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => router.push(`/all-doctors`)}
          />
          <Text style={styles.title}>Doctor Details</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.doctorCard}>
          <Image source={doctor.image} style={styles.doctorImage} />
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>{doctor.name}</Text>
            <View style={styles.horizontalLine} />
            <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
            <Text style={styles.doctorRating}>
              ★ {doctor.rating}/5.0 ({doctor.reviews}+ reviews)
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.sectionContent}>{doctor.about}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <View style={styles.contactInfo}>
            <Text>• Phone: {doctor.phone}</Text>
            <Text>• Email: {doctor.email}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Availability</Text>
          <View style={styles.availability}>
            {doctor.availability.map((time, index) => (
              <Text key={index}>• {time}</Text>
            ))}
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => router.push(`/appointment/${doctor.id}`)}
      >
        <Text style={styles.bookButtonText}>Book</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F4F2",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4A4A4A",
  },
  placeholder: {
    width: 24,
  },
  horizontalLine: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginVertical: 8,
    width: "75%",
  },
  doctorCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  doctorInfo: {
    marginLeft: 30,
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  doctorSpecialty: {
    fontSize: 14,
    color: "gray",
  },
  doctorRating: {
    fontSize: 14,
    marginTop: 8,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 24,
  },
  contactInfo: {
    backgroundColor: "#FFFF",
    borderRadius: 8,
    padding: 16,
  },
  availability: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 16,
  },
  bookButton: {
    backgroundColor: "#D2B48C",
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  bookButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
