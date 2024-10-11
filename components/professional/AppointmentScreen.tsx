import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

interface DoctorProps {
  name: string;
  title: string;
  organization: string;
  rating: number;
  reviewCount: number;
  imageUri: string;
}

const AppointmentScreen: React.FC<{ doctor: DoctorProps }> = ({ doctor }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [fullName, setFullName] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    // Implement appointment submission logic here
    console.log("Appointment submitted");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Appointment</Text>
      </View>

      <Text style={styles.sectionTitle}>Doctor Details</Text>

      <View style={styles.doctorCard}>
        <Image source={{ uri: doctor.imageUri }} style={styles.doctorImage} />
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>{doctor.name}</Text>
          <Text
            style={styles.doctorTitle}
          >{`${doctor.title} | ${doctor.organization}`}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#EAC612" />
            <Text
              style={styles.rating}
            >{`${doctor.rating} / 5.0 (${doctor.reviewCount}+ reviews)`}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.favoriteButton}>
          <Ionicons name="heart-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Appointment Details</Text>

      <View style={styles.inputRow}>
        <View style={styles.inputHalf}>
          <Text style={styles.inputLabel}>Date</Text>
          <TextInput
            style={styles.input}
            value={date}
            onChangeText={setDate}
            placeholder="Select date"
          />
        </View>
        <View style={styles.inputHalf}>
          <Text style={styles.inputLabel}>Time</Text>
          <TextInput
            style={styles.input}
            value={time}
            onChangeText={setTime}
            placeholder="Select time"
          />
        </View>
      </View>

      <View style={styles.inputFull}>
        <Text style={styles.inputLabel}>Full Name</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
          placeholder="Enter your full name"
        />
      </View>

      <View style={styles.inputFull}>
        <Text style={styles.inputLabel}>Notes</Text>
        <TextInput
          style={[styles.input, styles.notesInput]}
          value={notes}
          onChangeText={setNotes}
          placeholder="Add any notes for the doctor"
          multiline
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E0FF",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  doctorCard: {
    flexDirection: "row",
    backgroundColor: "#FFF0E0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  doctorInfo: {
    flex: 1,
    marginLeft: 15,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  doctorTitle: {
    fontSize: 14,
    color: "#666",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  rating: {
    marginLeft: 5,
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  inputHalf: {
    width: "48%",
  },
  inputFull: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#D3D3D3",
    borderRadius: 5,
    padding: 10,
  },
  notesInput: {
    height: 100,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#4B0082",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AppointmentScreen;
