import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "./SearchBar";
import DoctorCard from "./DoctorCard";

interface DoctorsListProps {
  onNavigateBack: () => void;
}

const mockDoctors = [
  {
    id: "1",
    name: "Dr. Avishka Senaretha",
    specialization: "Clinical Psychologist",
    hospital: "Hemas",
    rating: 4.9,
    reviewCount: 1000,
  },
  {
    id: "2",
    name: "Dr. Avishka Senaretha",
    specialization: "Clinical Psychologist",
    hospital: "Hemas",
    rating: 4.9,
    reviewCount: 1000,
  },
  {
    id: "3",
    name: "Dr. Avishka Senaretha",
    specialization: "Clinical Psychologist",
    hospital: "Hemas",
    rating: 4.9,
    reviewCount: 1000,
  },
  {
    id: "4",
    name: "Dr. Avishka Senaretha",
    specialization: "Clinical Psychologist",
    hospital: "Hemas",
    rating: 4.9,
    reviewCount: 1000,
  },
  {
    id: "5",
    name: "Dr. Avishka Senaretha",
    specialization: "Clinical Psychologist",
    hospital: "Hemas",
    rating: 4.9,
    reviewCount: 1000,
  },
  {
    id: "6",
    name: "Dr. Avishka Senaretha",
    specialization: "Clinical Psychologist",
    hospital: "Hemas",
    rating: 4.9,
    reviewCount: 1000,
  },
];

const DoctorsList: React.FC<DoctorsListProps> = ({ onNavigateBack }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Hi Patient,</Text>
          <Text style={styles.subtitle}>Let's Find Your Doctor</Text>
        </View>
        <Image
          source={require("../../assets/images/doctor-placeholder.png")}
          style={styles.avatar}
        />
      </View>
      <SearchBar
        placeholder="Search your doctor"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.recommendedSection}>
        <View style={styles.recommendedHeader}>
          <Text style={styles.sectionTitle}>Recommended</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>view all →</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={mockDoctors}
          renderItem={({ item }) => <DoctorCard doctor={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 28,
    fontWeight: "bold",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  recommendedSection: {
    flex: 1,
    marginTop: 24,
  },
  recommendedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  viewAll: {
    fontSize: 16,
    color: "#666",
  },
});

export default DoctorsList;
