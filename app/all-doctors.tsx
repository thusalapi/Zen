import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useDoctors } from "../hooks/useDoctors";
import FilterButton from "@/components/professional/FilterButton";
import DoctorList from "@/components/professional/DoctorsList";

const filterOptions = ["All", "Exp", "Rating", "Price", "Specialty"];

export default function AllDoctors() {
  const [activeFilter, setActiveFilter] = useState("All");
  const router = useRouter();
  const { doctors, loading, error } = useDoctors();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="black"
          onPress={() => router.push(`/(tabs)/doctors`)}
        />
        <Text style={styles.title}>Doctors</Text>
        <Ionicons
          name="search"
          size={24}
          color="black"
          onPress={() => {
            /* Implement search */
          }}
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
      >
        {filterOptions.map((option) => (
          <FilterButton
            key={option}
            title={option}
            isActive={activeFilter === option}
            onPress={() => setActiveFilter(option)}
          />
        ))}
      </ScrollView>

      <DoctorList doctors={doctors} />
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
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4A4A4A",
  },
  filterContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
    marginTop: 8,
  },
  cardList: {
    margin: 4,
  },
});
