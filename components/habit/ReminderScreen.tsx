import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationProp } from "@react-navigation/native";

const ReminderCard = () => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>Stay on Track!</Text>
    <Text style={styles.cardDescription}>
      It's time for Run! Take a moment to invest in yourself and build that routine. You're making progress every day!
    </Text>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Mark as done</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Snooze for 15 min</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const RemindersScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-back" size={24} color="#4A4A4A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reminders</Text>
        <TouchableOpacity>
          <Icon
            onPress={() => navigation.navigate("Home")}
            name="home"
            size={24}
            color="#4A4A4A"
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <ReminderCard />
        <ReminderCard />
        <ReminderCard />
        <ReminderCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#D2B48C',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flex: 1,
    marginHorizontal: 4,
  },
  buttonText: {
    color: '#4A4A4A',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default RemindersScreen;
