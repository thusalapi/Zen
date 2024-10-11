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

const FeedbackScreen: React.FC<{ doctor: DoctorProps }> = ({ doctor }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    // Implement feedback submission logic here
    console.log("Feedback submitted:", { rating, comment });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Feedback</Text>
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

      <Text style={styles.sectionTitle}>Your Ratings</Text>
      <View style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <Ionicons
              name={rating >= star ? "star" : "star-outline"}
              size={40}
              color={rating >= star ? "#EAC612" : "black"}
            />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Your Comment</Text>
      <TextInput
        style={styles.commentInput}
        multiline
        numberOfLines={4}
        value={comment}
        onChangeText={setComment}
        placeholder="Write your feedback here..."
      />

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
  starContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  commentInput: {
    backgroundColor: "#D3D3D3",
    borderRadius: 10,
    padding: 10,
    height: 100,
    textAlignVertical: "top",
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "#4B0082",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default FeedbackScreen;
