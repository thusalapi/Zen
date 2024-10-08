import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface GoalItemProps {
  title: string;
  duration: string;
  completedTasks: string[];
}

const GoalItem: React.FC<GoalItemProps> = ({
  title,
  duration,
  completedTasks,
}) => (
  <View style={styles.goalItem}>
    <View style={styles.goalHeader}>
      <Text style={styles.goalTitle}>{title}</Text>
      <Text style={styles.goalDuration}>{duration}</Text>
    </View>
    <View style={styles.taskIcons}>
      {completedTasks.map((task, index) => (
        <View key={index} style={styles.taskIcon}>
          <Icon name={task} size={24} color="#fff" />
        </View>
      ))}
      <TouchableOpacity style={styles.addTaskButton}>
        <Icon name="plus" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  </View>
);

const GoalsPage: React.FC = () => {
  const navigation = useNavigation<any>();

  const goals: GoalItemProps[] = [
    {
      title: "Be healthy",
      duration: "2 month",
      completedTasks: ["swim", "check", "run", "check"],
    },
    {
      title: "Be healthy",
      duration: "2 month",
      completedTasks: ["check", "check", "yoga", "water"],
    },
    {
      title: "Be healthy",
      duration: "2 month",
      completedTasks: ["check", "check", "yoga", "water"],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Habits</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>Goals</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        {goals.map((goal, index) => (
          <GoalItem key={index} {...goal} />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate("AddGoal")}
      >
        <Icon name="plus" size={36} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabContainer: {
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 20,
    paddingHorizontal: 16,
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
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  goalItem: {
    backgroundColor: "#9370DB",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  goalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  goalTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  goalDuration: {
    color: "#fff",
    fontSize: 14,
  },
  taskIcons: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  taskIcon: {
    backgroundColor: "#7B68EE",
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  addTaskButton: {
    backgroundColor: "#90EE90",
    borderRadius: 8,
    padding: 8,
  },
  floatingButton: {
    position: "absolute",
    right: 30,
    bottom: 30,
    backgroundColor: "#9370DB",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GoalsPage;
