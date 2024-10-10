import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";

const HabitsAndGoalsScreen = ({ navigation }: { navigation: any }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [selectedHabits, setSelectedHabits] = useState<{
    [key: number]: boolean;
  }>({});
  const [habits, setHabits] = useState<
    { _id: string; name: string; duration: string }[]
  >([]);

  // const habits = [
  //   { id: 1, name: "Be healthy", duration: "2 month" },
  //   { id: 2, name: "Be healthy", duration: "2 month" },
  // ];

  // Fetch habits from backend
  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/habits/6707bed530b32fa9c8952e00"
        ); // Replace with your backend URL
        setHabits(response.data); // Assuming data contains an array of habits
      } catch (error) {
        console.error("Error fetching habits:", error);
      }
    };

    fetchHabits();
  }, []);

  console.log(habits);

  const goals = [
    { id: 1, name: "Be healthy", duration: "2 month", color: "#A8D8D8" },
    { id: 2, name: "Be healthy", duration: "2 month", color: "#B8E0B8" },
    { id: 3, name: "Be healthy", duration: "2 month", color: "#A8D8D8" },
  ];

  const modalHabits = [
    { id: 1, name: "Meditation", frequency: "1/3 week" },
    { id: 2, name: "Drink water", frequency: "4/7 days" },
  ];

  const renderHabitItem = (habit: any) => (
    <View style={styles.habitItem}>
      <Text style={styles.habitText}>{habit.habitName}</Text>
      <View style={styles.habitRight}>
        <Text style={styles.habitDuration}>
          {(new Date(habit.dateRange.end).getTime() -
            new Date(habit.dateRange.start).getTime()) /
            (1000 * 60 * 60 * 24)}{" "}
          days
        </Text>
        <Icon name="chevron-right" size={24} color="#FFFFFF" />
      </View>
    </View>
  );

  const renderGoalItem = (goal: any) => (
    <View style={[styles.goalItem, { backgroundColor: goal.color }]}>
      <View style={styles.goalTop}>
        <Text style={styles.goalText}>{goal.name}</Text>
        <Text style={styles.goalDuration}>{goal.duration}</Text>
      </View>
      <View style={styles.goalBottom}>
        <View style={styles.goalButtons}>
          {["check", "check", "run", "water"].map((iconName, index) => (
            <TouchableOpacity key={index} style={styles.goalButton}>
              <Icon name={iconName} size={20} color="#000000" />
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.goalButton}
            onPress={() => {
              setSelectedGoal(goal);
              setModalVisible(true);
            }}
          >
            <Icon name="plus" size={20} color="#000000" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.goalArrow}>
          <Icon name="chevron-right" size={24} color="#000000" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const toggleHabitSelection = (habitId: any) => {
    setSelectedHabits((prev) => ({
      ...prev,
      [habitId]: !prev[habitId],
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Habits</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View all→</Text>
            </TouchableOpacity>
          </View>
          {habits.map((habit) => (
            <View key={habit._id}>{renderHabitItem(habit)}</View>
          ))}
        </View>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Goals</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View all→</Text>
            </TouchableOpacity>
          </View>
          {goals.map((goal) => (
            <View key={goal.id}>{renderGoalItem(goal)}</View>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate("habitform")}
        style={styles.addButton}
      >
        <Icon name="plus" size={30} color="#FFFFFF" />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Icon name="close" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Add habits to goal</Text>
            <ScrollView style={styles.modalScrollView}>
              {modalHabits.map((habit) => (
                <TouchableOpacity
                  key={habit.id}
                  style={styles.modalHabitItem}
                  onPress={() => toggleHabitSelection(habit.id)}
                >
                  <View style={styles.modalHabitLeft}>
                    <Text style={styles.modalHabitName}>{habit.name}</Text>
                  </View>
                  <View style={styles.modalHabitRight}>
                    <Text style={styles.modalHabitFrequency}>
                      {habit.frequency}
                    </Text>
                    {selectedHabits[habit.id] && (
                      <View style={styles.checkCircle}>
                        <Icon name="check" size={16} color="#FFFFFF" />
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F5F2",
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
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
    color: "#8B4513",
  },
  viewAllText: {
    fontSize: 16,
    color: "#8B4513",
  },
  habitItem: {
    backgroundColor: "#3A3B3C",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  habitText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  habitRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  habitDuration: {
    color: "#FFFFFF",
    marginRight: 10,
  },
  goalItem: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  goalTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  goalText: {
    color: "#000000",
    fontSize: 16,
  },
  goalDuration: {
    color: "#000000",
  },
  goalBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalButtons: {
    flexDirection: "row",
  },
  goalButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FFDAB9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  goalArrow: {
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#8B4513",
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    maxHeight: "50%",
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  modalScrollView: {
    maxHeight: "70%",
  },
  modalHabitItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
  },
  modalHabitLeft: {
    flex: 2,
    backgroundColor: "#4169E1",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 15,
  },
  modalHabitName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  modalHabitRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#87CEFA",
    padding: 15,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  modalHabitFrequency: {
    fontSize: 14,
    color: "#000000",
  },
  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#32CD32",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HabitsAndGoalsScreen;
