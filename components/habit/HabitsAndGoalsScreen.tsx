import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Modal,
  Image,
  RefreshControl,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";

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

  const [refreshing, setRefreshing] = useState(false); // Add refreshing state

  const fetchHabits = async () => {
    try {
      const response = await axios.get(
        "http://192.168.29.188:3000/api/habits/6707bed530b32fa9c8952e00"
      ); // Replace with your backend URL
      setHabits(response.data); // Assuming data contains an array of habits
    } catch (error) {
      console.error("Error fetching habits:", error);
    }
  };

  // Fetch habits from backend
  useEffect(() => {
    fetchHabits();
  }, []);

  // Function to handle pull-to-refresh
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchHabits();
    setRefreshing(false);
  };

  const goals = [
    { id: 1, name: "Study Art", duration: "6 days", color: "#A8D8D8" },
    { id: 2, name: "Run", duration: "S M", color: "#B8E0B8" },
    { id: 3, name: "Be healthy", duration: "2 month", color: "#A8D8D8" },
  ];

  const modalHabits = [
    { id: 1, name: "Meditation", frequency: "1/3 week" },
    { id: 2, name: "Drink water", frequency: "4/7 days" },
  ];

  const dayMap = {
    1: "M", // Monday
    2: "T", // Tuesday
    3: "W", // Wednesday
    4: "T", // Thursday
    5: "F", // Friday
    6: "S", // Saturday
    7: "S", // Sunday
  };

  const renderHabitItem = (habit: any) => (
    <View style={styles.habitItem}>
      <Text style={styles.habitText}>{habit.habitName}</Text>
      <View style={styles.habitRight}>
        {habit.selectedDays && habit.selectedDays.length > 0 ? (
          <Text style={styles.habitDuration}>
            {habit.selectedDays.map((day: number) => dayMap[day]).join(" ")}
          </Text>
        ) : (
          <Text style={styles.habitDuration}>
            {(new Date(habit.dateRange.end).getTime() -
              new Date(habit.dateRange.start).getTime()) /
              (1000 * 60 * 60 * 24)}{" "}
            days
          </Text>
        )}
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
      <View style={styles.sectionMainHeader}>
        <Text style={styles.title}>My Habits</Text>
        <TouchableOpacity>
          <FontAwesomeIcons
            name="bell-o"
            onPress={() => navigation.navigate("reminder")}
            size={24}
            style={{ marginTop: 45, marginRight: 20 }}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.title}>Build Better Habits</Text>
            <Text style={styles.subtitle}>One Step at a Time.</Text>
          </View>
          <Image
            source={require("../../assets/images/habitpng.png")}
            style={styles.brainImage}
          />
        </View>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Habits</Text>
            <TouchableOpacity onPress={() => navigation.navigate("allhabit")}>
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
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("habitform")}
        style={styles.addButton}
      >
        <Icon name="plus" size={30} color="#FFFFFF" />
      </TouchableOpacity> */}

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
              {habits.map((habit) => (
                <TouchableOpacity
                  key={habit._id}
                  style={styles.modalHabitItem}
                  onPress={() => toggleHabitSelection(habit._id)}
                >
                  <View style={styles.modalHabitLeft}>
                    <Text style={styles.modalHabitName}>{habit.habitName}</Text>
                  </View>
                  <View style={styles.modalHabitRight}>
                    <Text style={styles.modalHabitFrequency}>
                      {habit.selectedDays && habit.selectedDays.length > 0 ? (
                        <Text style={styles.habitDuration}>
                          {habit.selectedDays
                            .map((day: number) => dayMap[day])
                            .join(" ")}
                        </Text>
                      ) : (
                        <Text style={styles.habitDuration}>
                          {(new Date(habit.dateRange.end).getTime() -
                            new Date(habit.dateRange.start).getTime()) /
                            (1000 * 60 * 60 * 24)}{" "}
                          days
                        </Text>
                      )}
                    </Text>
                    {selectedHabits[habit._id] && (
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
    backgroundColor: "#F7F4F2",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#151515",
    marginBottom: 4,
    marginTop: 40,
    marginLeft: 16,
  },
  headerText: {
    flex: 1,
    marginRight: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#BC9680",
    padding: 10,
    borderRadius: 20,
    width: "92%",
    height: 225,
    marginLeft: 14,
  },
  subtitle: {
    fontFamily: "Sora_400Regular",
    fontSize: 16,
    color: "#fff",
    marginLeft: 17,
  },
  brainImage: {
    width: 150,
    height: 180,
    resizeMode: "contain",
  },
  scrollView: {
    flex: 1,
    marginTop: 5,
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionMainHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
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
    color: "#151515",
  },
  viewAllText: {
    fontSize: 16,
    color: "#151515",
  },
  habitItem: {
    backgroundColor: "#4F3422",
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
    backgroundColor: "#4F3422",
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
    backgroundColor: "#F7F4F2",
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
    backgroundColor: "#4F3422",
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
    backgroundColor: "#D6C0B3",
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
