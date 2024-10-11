import React from "react";
import {
  View,
  Text,
  Image,
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

interface HistoryScreenProps {
  sessionsDone: number;
  sessionsUpcoming: number;
  appointments: DoctorProps[];
}

const DoctorCard: React.FC<{ doctor: DoctorProps }> = ({ doctor }) => (
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
);

const HistoryScreen: React.FC<HistoryScreenProps> = ({
  sessionsDone,
  sessionsUpcoming,
  appointments,
}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>History</Text>
      </View>

      <Text style={styles.sectionTitle}>History Overview</Text>

      <View style={styles.overviewContainer}>
        <View style={[styles.overviewCard, { backgroundColor: "#E0FFFF" }]}>
          <Text style={styles.overviewLabel}>Sessions Done</Text>
          <Text style={styles.overviewNumber}>{sessionsDone}</Text>
        </View>
        <View style={[styles.overviewCard, { backgroundColor: "#F1F1F1" }]}>
          <Text style={styles.overviewLabel}>Sessions Upcoming</Text>
          <Text style={styles.overviewNumber}>{sessionsUpcoming}</Text>
        </View>
      </View>

      <View style={styles.appointmentsHeader}>
        <Text style={styles.sectionTitle}>Appointments</Text>
        <TouchableOpacity onPress={() => console.log("View all appointments")}>
          <Text style={styles.viewAllText}>view all →</Text>
        </TouchableOpacity>
      </View>

      {appointments.map((doctor, index) => (
        <DoctorCard key={index} doctor={doctor} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F4F2",
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
  overviewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  overviewCard: {
    width: "48%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  overviewLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  overviewNumber: {
    fontSize: 24,
    fontWeight: "bold",
  },
  appointmentsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  viewAllText: {
    color: "#4B0082",
    fontSize: 14,
  },
  doctorCard: {
    flexDirection: "row",
    backgroundColor: "#FFF0E0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  doctorInfo: {
    flex: 1,
    marginLeft: 15,
  },
  doctorName: {
    fontSize: 16,
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
    fontSize: 12,
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default HistoryScreen;
