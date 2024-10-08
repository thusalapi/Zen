import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Calendar } from "react-native-calendars";

const CreateHabit = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.closeIcon}>X</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Create New Habit</Text>
        <View style={styles.headerIcons}>
          <Text style={styles.icon}>🔔</Text>
          <Text style={styles.icon}>⋮</Text>
        </View>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={[styles.button, styles.selectedButton]}>
          <Text style={styles.selectedButtonText}>Regular Habit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Regular Habit</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Habit Name</Text>
      <TextInput style={styles.input} placeholder="Study Art" />

      <Text style={styles.label}>Icon</Text>
      <View style={styles.iconRow}>
        <Text style={styles.icon}>🌙</Text>
        <Text style={styles.icon}>💧</Text>
        <Text style={styles.icon}>🌊</Text>
        <Text style={styles.icon}>🧘</Text>
        <Text style={styles.icon}>🏃</Text>
      </View>

      <Text style={styles.label}>Color</Text>
      <View style={styles.colorRow}>
        <View style={[styles.colorCircle, { backgroundColor: "#f28b82" }]} />
        <View style={[styles.colorCircle, { backgroundColor: "#ccff90" }]} />
        <View style={[styles.colorCircle, { backgroundColor: "#a7ffeb" }]} />
        <View style={[styles.colorCircle, { backgroundColor: "#fbbc04" }]} />
        <View style={[styles.colorCircle, { backgroundColor: "#d7aefb" }]} />
        <View
          style={[
            styles.colorCircle,
            styles.selectedColor,
            { backgroundColor: "#fdcfe8" },
          ]}
        />
      </View>

      <Text style={styles.label}>Repeat</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.repeatButton}>
          <Text style={styles.repeatText}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.repeatButton}>
          <Text style={styles.repeatText}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.repeatButtonSelected}>
          <Text style={styles.repeatTextSelected}>Monthly</Text>
        </TouchableOpacity>
      </View>

      <Calendar
        style={styles.calendar}
        // Add calendar configuration here
      />

      <Text style={styles.label}>Repeat</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.repeatButton}>
          <Text style={styles.repeatText}>Morning</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.repeatButton}>
          <Text style={styles.repeatText}>Afternoon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.repeatButtonSelected}>
          <Text style={styles.repeatTextSelected}>Evening</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.endHabitRow}>
        <Text style={styles.label}>End Habit</Text>
        <Switch />
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    fontSize: 24,
    marginHorizontal: 8,
  },
  closeIcon: {
    fontSize: 24,
  },
  buttonGroup: {
    flexDirection: "row",
    marginVertical: 10,
  },
  button: {
    flex: 1,
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 4,
  },
  buttonText: {
    color: "#000",
  },
  selectedButton: {
    backgroundColor: "#8e7cc3",
  },
  selectedButtonText: {
    color: "#fff",
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    backgroundColor: "#fff",
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  colorRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  selectedColor: {
    borderWidth: 2,
    borderColor: "#000",
  },
  repeatButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#8e7cc3",
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 4,
  },
  repeatButtonSelected: {
    flex: 1,
    padding: 10,
    backgroundColor: "#8e7cc3",
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 4,
  },
  repeatText: {
    color: "#8e7cc3",
  },
  repeatTextSelected: {
    color: "#fff",
  },
  calendar: {
    marginVertical: 10,
  },
  endHabitRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  saveButton: {
    padding: 16,
    backgroundColor: "#8e7cc3",
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default CreateHabit;
