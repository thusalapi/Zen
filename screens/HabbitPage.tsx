import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const MyHabitsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Habits</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Goals</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Overall</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filters}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Morning</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Afternoon</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.habitCard, { backgroundColor: "#fdd835" }]}>
        <Text style={styles.habitIcon}>🌙</Text>
        <Text style={styles.habitText}>Sleep early</Text>
        <Text style={styles.habitProgress}>5 / 7 days</Text>
      </View>

      <View style={[styles.habitCard, { backgroundColor: "#c6ff00" }]}>
        <Text style={styles.habitIcon}>💧</Text>
        <Text style={styles.habitText}>Drink water</Text>
        <Text style={styles.habitProgress}>4 / 7 days</Text>
      </View>

      <View style={[styles.habitCard, { backgroundColor: "#00e5ff" }]}>
        <Text style={styles.habitIcon}>🌊</Text>
        <Text style={styles.habitText}>Swim</Text>
        <Text style={styles.habitProgress}>3 / 7 days</Text>
      </View>

      <View style={[styles.habitCard, { backgroundColor: "#d500f9" }]}>
        <Text style={styles.habitIcon}>🧘</Text>
        <Text style={styles.habitText}>Meditation</Text>
        <Text style={styles.habitProgress}>1 / 3 week</Text>
      </View>

      <View style={[styles.habitCard, { backgroundColor: "#00bfa5" }]}>
        <Text style={styles.habitIcon}>🏃</Text>
        <Text style={styles.habitText}>Run</Text>
        <Text style={styles.habitProgress}>7 / 7 days</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  button: {
    flex: 1,
    padding: 10,
    backgroundColor: "#8e7cc3",
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
  filters: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  filterButton: {
    flex: 1,
    padding: 8,
    backgroundColor: "#8e7cc3",
    borderRadius: 20,
    alignItems: "center",
    marginHorizontal: 4,
  },
  filterButtonText: {
    color: "#fff",
    fontSize: 12,
  },
  habitCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  habitIcon: {
    fontSize: 24,
  },
  habitText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 12,
  },
  habitProgress: {
    fontSize: 16,
  },
});

export default MyHabitsScreen;
