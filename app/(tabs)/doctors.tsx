import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "@/components/professional/SearchBar";
import ViewAllHeader from "@/components/professional/ViewAllHeader";
import DoctorList from "@/components/professional/DoctorsList";
import { useDoctors } from "@/hooks/useDoctors";

export default function ProfessionalSupport() {
  const [searchQuery, setSearchQuery] = useState("");
  const { doctors, loading, error } = useDoctors();

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.minititle}>Hi Patient</Text>
      <Text style={styles.title}>Let's Find</Text>
      <Text style={styles.title2}>Your Doctor</Text>
      <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
      <ViewAllHeader title="Recommended" />
      <DoctorList doctors={filteredDoctors} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F7F4F2",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  title2: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  minititle: {
    fontSize: 24,
    fontWeight: "light",
    marginTop: 20,
  },
});
