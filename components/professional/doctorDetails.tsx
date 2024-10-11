import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

interface DoctorDetailsProps {
  name: string;
  title: string;
  organization: string;
  rating: number;
  reviewCount: number;
  about: string;
  services: string[];
  contactInfo: {
    phone: string;
    email: string;
  };
  availability: {
    weekdays: string;
    saturday: string;
  };
  onNavigateBack: () => void;
}

const DoctorDetails: React.FC<DoctorDetailsProps> = ({
  name,
  title,
  organization,
  rating,
  reviewCount,
  about,
  services,
  contactInfo,
  availability,
}) => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: "Doctor Details",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.card}>
        <Image
          source={require("../../assets/images/doctor-placeholder.png")}
          style={styles.image}
        />
        <View style={styles.doctorInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.title}>{`${title} | ${organization}`}</Text>
          <View style={styles.rating}>
            <Ionicons name="star" size={16} color="#EAC612" />
            <Text
              style={styles.ratingText}
            >{`${rating} / 5.0 (${reviewCount}+ reviews)`}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.favoriteButton}>
          <Ionicons name="heart-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.sectionContent}>{about}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Services Offered</Text>
        {services.map((service, index) => (
          <Text key={index} style={styles.listItem}>
            • {service}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <Text style={styles.listItem}>Phone: {contactInfo.phone}</Text>
        <Text style={styles.listItem}>Email: {contactInfo.email}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Availability</Text>
        <Text style={styles.listItem}>
          Monday - Friday: {availability.weekdays}
        </Text>
        <Text style={styles.listItem}>Saturday: {availability.saturday}</Text>
      </View>

      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    margin: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  doctorInfo: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 5,
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  section: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 14,
    lineHeight: 20,
  },
  listItem: {
    fontSize: 14,
    marginBottom: 5,
  },
  bookButton: {
    backgroundColor: "#007AFF",
    borderRadius: 10,
    padding: 15,
    margin: 15,
    alignItems: "center",
  },
  bookButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DoctorDetails;
