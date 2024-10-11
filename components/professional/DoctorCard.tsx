import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Doctor } from "@/types/Doctor";

type Props = {
  doctor: Doctor;
};

export default function DoctorCard({ doctor }: Props) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/doctor-details/${doctor.id}`)}
    >
      <Image source={doctor.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{doctor.name}</Text>
        <View style={styles.horizontalLine} />
        <Text style={styles.specialty}>{doctor.specialty}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>★ {doctor.rating}/5.0</Text>
          <Text style={styles.reviewsText}>({doctor.reviews}+ reviews)</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginVertical: 8,
    width: "75%",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  info: {
    marginLeft: 30,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  specialty: {
    fontSize: 14,
    color: "gray",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
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
