import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface HabitItemProps {
  icon: string;
  title: string;
  progress: string;
  completed: boolean;
}

const HabitItem: React.FC<HabitItemProps> = ({
  icon,
  title,
  progress,
  completed,
}) => (
  <View style={[styles.habitItem, completed && styles.completedHabit]}>
    <View style={styles.habitContent}>
      <Icon name={icon} size={24} color="#fff" />
      <Text style={styles.habitTitle}>{title}</Text>
    </View>
    <View style={styles.habitProgressContainer}>
      <Text style={styles.habitProgress}>{progress}</Text>
      {completed && <Icon name="check-circle" size={24} color="#fff" />}
    </View>
  </View>
);

const HabitsScreen: React.FC = () => {
  const navigation = useNavigation();
  const [timeFilter, setTimeFilter] = useState("Today");
  const [dayFilter, setDayFilter] = useState("Morning");

  const habits: HabitItemProps[] = [
    {
      icon: "weather-night",
      title: "Sleep early",
      progress: "5 / 7 days",
      completed: false,
    },
    {
      icon: "water",
      title: "Drink water",
      progress: "4 / 7 days",
      completed: false,
    },
    { icon: "swim", title: "Swim", progress: "3 / 7 days", completed: false },
    {
      icon: "meditation",
      title: "Meditation",
      progress: "1 / 3 week",
      completed: false,
    },
    { icon: "run", title: "Run", progress: "7 / 7 days", completed: true },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={styles.activeTabText}>Habits</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            // onPress={() => navigation.navigate("Goals")}
          >
            <Text style={styles.tabText}>Goals</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.filterContainer}>
          {["Today", "Weekly", "Overall"].map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterButton,
                timeFilter === filter && styles.activeFilterButton,
              ]}
              onPress={() => setTimeFilter(filter)}
            >
              <Text style={styles.filterText}>{filter}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.dayFilterContainer}>
          {["All", "Morning", "Afternoon"].map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.dayFilterButton,
                dayFilter === filter && styles.activeDayFilterButton,
              ]}
              onPress={() => setDayFilter(filter)}
            >
              <Text style={styles.dayFilterText}>{filter}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {habits.map((habit, index) => (
          <HabitItem key={index} {...habit} />
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.floatingButton}
        // onPress={() => navigation.navigate("AddHabit")}
      >
        <Icon name="plus" size={36} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  tabContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    marginHorizontal: 4,
  },
  activeTab: {
    backgroundColor: "#9370DB",
  },
  tabText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  activeTabText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    backgroundColor: "#9370DB",
  },
  activeFilterButton: {
    backgroundColor: "#8A2BE2",
  },
  filterText: {
    color: "#fff",
    fontSize: 16,
  },
  dayFilterContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  dayFilterButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: "#E0E0E0",
  },
  activeDayFilterButton: {
    backgroundColor: "#9370DB",
  },
  dayFilterText: {
    color: "#000",
    fontSize: 14,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  habitItem: {
    backgroundColor: "#9370DB",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  completedHabit: {
    backgroundColor: "#90EE90",
  },
  habitContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  habitTitle: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
  },
  habitProgressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  habitProgress: {
    color: "#fff",
    fontSize: 14,
    marginRight: 10,
  },
  floatingButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#9370DB",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HabitsScreen;
