import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface Habit {
  id: number;
  name: string;
  duration: string;
  progress?: number;
}

interface HabitItemProps {
  habit: Habit;
  onComplete?: () => void;
  onDelete?: () => void;
  isCompleted?: boolean;
}

const HabitItem: React.FC<HabitItemProps> = ({ habit, onComplete, onDelete, isCompleted }) => {

  const progressPercentage = habit.progress || 0;

  return (
    <View style={[styles.habitItem, isCompleted && styles.completedHabitItem]}>
      <View style={styles.habitInfo}>
        <Text style={styles.habitName}>{habit.name}</Text>
        <Text style={styles.habitDuration}>{habit.duration}</Text>
      </View>
      {!isCompleted && (
        <View style={styles.habitActions}>
          <TouchableOpacity onPress={onComplete}>
            <Icon name="checkmark-circle" size={24} color="#8FD14F" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete}>
            <Icon name="close-circle" size={24} color="#D91656" />
          </TouchableOpacity>
        </View>
      )}
      {/* {isCompleted && (
        <View style={styles.progressBar}>
          <View
            style={[styles.progressFill, { width: `${50}%` }]}
          />
        </View>
      )} */}
    </View>
  );
};

const AllHabitsScreen = ({ navigation }: { navigation: any }) => {
  const [currentHabits, setCurrentHabits] = useState([
    { id: 1, name: "Be healthy", duration: "2 month" },
    { id: 2, name: "Be healthy", duration: "2 month" },
    { id: 3, name: "Be healthy", duration: "2 month" },
    { id: 4, name: "Be healthy", duration: "2 month" },
  ]);

  const [completedHabits, setCompletedHabits] = useState([
    { id: 5, name: "Be healthy", duration: "2 month", progress: 75 },
    { id: 6, name: "Be healthy", duration: "2 month", progress: 50 },
  ]);

  const completeHabit = (habit: any) => {
    setCurrentHabits(currentHabits.filter((h) => h.id !== habit.id));
    setCompletedHabits([...completedHabits, { ...habit, progress: 0 }]);
  };

  const deleteHabit = (habit: any) => {
    setCurrentHabits(currentHabits.filter((h) => h.id !== habit.id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>All Habits</Text>

      <ScrollView style={styles.scrollView}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Habits</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.viewAllText}>View current→</Text>
          </TouchableOpacity>
        </View>
        {currentHabits.map((habit) => (
          <HabitItem
            key={habit.id}
            habit={habit}
            onComplete={() => completeHabit(habit)}
            onDelete={() => deleteHabit(habit)}
          />
        ))}

        <Text style={styles.sectionTitle}>Completed</Text>
        {completedHabits.map((habit) => (
          <HabitItem key={habit.id} habit={habit} isCompleted={true} />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.addButton}>
        <Icon
          onPress={() => navigation.navigate("habitform")}
          name="add"
          size={24}
          color="#FFFFFF"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4F3422",
    marginBottom: 4,
    marginTop: 40,
    marginLeft: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4F3422",
    marginTop: 3,
    marginLeft: 2,
    marginBottom: 10,
  },
  habitItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#293754",
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
  },
  completedHabitItem: {
    backgroundColor: "#2E7D32",
  },
  habitInfo: {
    flex: 1,
  },
  habitName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  habitDuration: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  habitActions: {
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between",
  },
  progressBar: {
    width: 60,
    height: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#D91656",
  },
  addButton: {
    position: "absolute",
    right: 24,
    bottom: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#4F3422",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  viewAllText: {
    fontSize: 16,
    color: "#4F3422",
    marginBottom: 10,
  },
});

export default AllHabitsScreen;
