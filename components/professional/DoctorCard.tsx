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
        <Text style={styles.specialty}>{doctor.specialty}</Text>
        <Text style={styles.rating}>
          ★ {doctor.rating}/5.0 ({doctor.reviews}+ reviews)
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  info: {
    marginLeft: 10,
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
  rating: {
    fontSize: 14,
  },
});
