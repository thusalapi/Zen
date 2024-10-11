import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useDoctors } from "../hooks/useDoctors";
import { Doctor } from "../types/Doctor";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

type RootStackParamList = {
  Feedback: { doctorId: string };
};

type HistoryScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const HistoryScreen: React.FC = () => {
  const navigation = useNavigation<HistoryScreenNavigationProp>();
  const { doctors, loading, error } = useDoctors();
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const doctor = doctors.find((d) => d.id === id);

  const handleDoctorPress = (doctorId: string) => {
    router.push(`/feedback/${doctorId}`);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading doctors...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  const handleSubmit = () => {
    // TODO: Send feedback data to your backend
    router.push("/history");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="black"
          onPress={() => router.back()}
        />
        <Text style={styles.title}>History</Text>
        <View style={styles.placeholder} />
      </View>

      <Text style={styles.subtitle}>History Overview</Text>

      <View style={styles.overviewContainer}>
        <View style={styles.overviewItem}>
          <Text style={styles.overviewNumber}>10</Text>
          <Text style={styles.overviewLabel}>Done</Text>
        </View>
        <View style={styles.upcoming}>
          <Text style={styles.overviewNumber}>3</Text>
          <Text style={styles.overviewLabel}>Upcoming</Text>
        </View>
      </View>

      <View style={styles.appointmentsHeader}>
        <Text style={styles.appointmentsTitle}>Appointments</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>view all →</Text>
        </TouchableOpacity>
      </View>

      {doctors.map((doctor: Doctor) => (
        <TouchableOpacity
          key={doctor.id}
          style={styles.doctorCard}
          onPress={() => handleDoctorPress(doctor.id)}
        >
          <Image source={doctor.image} style={styles.doctorImage} />
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>{doctor.name}</Text>
            <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>★ {doctor.rating}/5.0</Text>
              <Text style={styles.reviewsText}>
                ({doctor.reviews}+ reviews)
              </Text>
            </View>
          </View>
        </TouchableOpacity>
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
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginTop: 32,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4A4A4A",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  overviewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  overviewItem: {
    backgroundColor: "#B4DADA",
    borderRadius: 10,
    padding: 20,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  upcoming: {
    backgroundColor: "#CDD2F6",
    borderRadius: 10,
    padding: 20,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  overviewNumber: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  overviewLabel: {
    fontSize: 16,
  },
  placeholder: {
    width: 24,
  },
  appointmentsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  appointmentsTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  viewAllText: {
    color: "#007AFF",
  },
  doctorCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#EAC612",
    marginRight: 5,
  },
  reviewsText: {
    fontSize: 12,
    color: "#666",
  },
});

export default HistoryScreen;
