import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
} from "react-native";

const GoalsContent = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabButtonText}>Habits</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabButton, styles.selectedTab]}>
          <Text style={styles.selectedTabText}>Goals</Text>
        </TouchableOpacity>
      </View>

      {[1, 2, 3].map((item, index) => (
        <View key={index} style={styles.goalCard}>
          <View style={styles.leftSection}>
            <Text style={styles.goalTitle}>Be healthy</Text>
            <View style={styles.iconsRow}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>🏊</Text>
              </View>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>✔️</Text>
              </View>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>🏃</Text>
              </View>
            </View>
          </View>
          <View style={styles.rightSection}>
            <Text style={styles.durationText}>2 month</Text>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.addButton}
            >
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.goalCard}>
              <View style={[styles.leftSection, styles.modalLeftSection]}>
                <Text style={styles.goalTitle}>Drink water</Text>
              </View>
              <View style={[styles.rightSection, styles.modalRightSection]}>
                <Text style={styles.durationText}>4 / 7 days</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.modalButton}
            >
              <Text style={styles.modalButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    padding: 10,
    backgroundColor: "#b39ddb",
    alignItems: "center",
    marginHorizontal: 4,
    borderRadius: 8,
  },
  tabButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  selectedTab: {
    backgroundColor: "#9575cd",
  },
  selectedTabText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  goalCard: {
    flexDirection: "row",
    borderRadius: 8,
    marginVertical: 8,
    overflow: "hidden",
    backgroundColor: "#66bb6a",
    elevation: 2,
  },
  leftSection: {
    flex: 2,
    backgroundColor: "#a5d6a7",
    padding: 16,
    justifyContent: "center",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  rightSection: {
    flex: 1,
    backgroundColor: "#4caf50",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  iconsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 8,
  },
  iconContainer: {
    backgroundColor: "#ffeb3b",
    borderRadius: 4,
    padding: 4,
    marginHorizontal: 4,
  },
  icon: {
    fontSize: 24,
  },
  durationText: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: "#9575cd",
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 320,
    padding: 20,
    backgroundColor: "#f0f4c3",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  modalLeftSection: {
    backgroundColor: "#aed581",
  },
  modalRightSection: {
    backgroundColor: "#81c784",
  },
  modalButton: {
    backgroundColor: "#7e57c2",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    marginTop: 20,
    width: "80%",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default GoalsContent;
