import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ListRenderItem,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import DoctorCard from "./DoctorCard";

const filterOptions = ["All", "Exp", "Rating", "Price"] as const;
type FilterOption = (typeof filterOptions)[number];

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  hospital: string;
  rating: number;
  reviewCount: number;
}

const mockDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Avishka Senaretha",
    specialization: "Clinical Psychologist",
    hospital: "Hemas",
    rating: 4.9,
    reviewCount: 1000,
  },
  {
    id: "1",
    name: "Dr. Avishka Senaretha",
    specialization: "Clinical Psychologist",
    hospital: "Hemas",
    rating: 4.9,
    reviewCount: 1000,
  },
  {
    id: "1",
    name: "Dr. Avishka Senaretha",
    specialization: "Clinical Psychologist",
    hospital: "Hemas",
    rating: 4.9,
    reviewCount: 1000,
  },
  {
    id: "1",
    name: "Dr. Avishka Senaretha",
    specialization: "Clinical Psychologist",
    hospital: "Hemas",
    rating: 4.9,
    reviewCount: 1000,
  },
  {
    id: "1",
    name: "Dr. Avishka Senaretha",
    specialization: "Clinical Psychologist",
    hospital: "Hemas",
    rating: 4.9,
    reviewCount: 1000,
  },
  {
    id: "1",
    name: "Dr. Avishka Senaretha",
    specialization: "Clinical Psychologist",
    hospital: "Hemas",
    rating: 4.9,
    reviewCount: 1000,
  },
  {
    id: "1",
    name: "Dr. Avishka Senaretha",
    specialization: "Clinical Psychologist",
    hospital: "Hemas",
    rating: 4.9,
    reviewCount: 1000,
  },
];

interface AllDoctorsScreenProps {
  navigation: {
    goBack: () => void;
  };
}

const AllDoctorsScreen: React.FC<AllDoctorsScreenProps> = ({ navigation }) => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");

  const handleFilter = (filter: FilterOption) => {
    setActiveFilter(filter);
  };

  const renderDoctorCard: ListRenderItem<Doctor> = ({ item }) => (
    <DoctorCard doctor={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Doctors</Text>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.filterContainer}>
        {filterOptions.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.filterButton,
              activeFilter === option && styles.activeFilterButton,
            ]}
            onPress={() => handleFilter(option)}
          >
            <Text
              style={[
                styles.filterButtonText,
                activeFilter === option && styles.activeFilterButtonText,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.filterIconButton}>
          <Ionicons name="options" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={mockDoctors}
        renderItem={renderDoctorCard}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E0FF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#D0C9F0",
  },
  activeFilterButton: {
    backgroundColor: "#4A3F80",
  },
  filterButtonText: {
    color: "#4A3F80",
    fontWeight: "bold",
  },
  activeFilterButtonText: {
    color: "white",
  },
  filterIconButton: {
    backgroundColor: "#4A3F80",
    borderRadius: 20,
    padding: 8,
  },
});

export default AllDoctorsScreen;
