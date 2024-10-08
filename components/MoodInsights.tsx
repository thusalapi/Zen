import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MoodInsightsProps {
  name: string;
  moodText: string;
  moodPercentage: number;
  journalLogs: number;
  hoursSpent: number;
  helpMessage: string;
}

const MoodInsights: React.FC<MoodInsightsProps> = ({
  name,
  moodText,
  moodPercentage,
  journalLogs,
  hoursSpent,
  helpMessage,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.header}>Mood Insights</Text>
        <Text style={styles.subtitle}>You are... not okay</Text>

        <View style={styles.insightBox}>
          <Text style={styles.title}>{`${name}, You were ${moodText} most of this month :(`}</Text>
          <View style={styles.circleContainer}>
            <Text style={styles.circleText}>
              {`You didn’t feel good for ${moodPercentage}% of this month`}
            </Text>
            <View style={styles.circle}></View>
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Ionicons name="star-outline" size={24} color="#5A5A89" />
              <Text style={styles.statNumber}>{journalLogs}</Text>
              <Text style={styles.statLabel}>Journal Logs</Text>
            </View>
            <View style={styles.statBox}>
              <Ionicons name="time-outline" size={24} color="#5A5A89" />
              <Text style={styles.statNumber}>{hoursSpent}h</Text>
              <Text style={styles.statLabel}>Hours Spent</Text>
            </View>
          </View>
          <View style={styles.helpBox}>
            <Text style={styles.helpTitle}>Seek Help</Text>
            <Text style={styles.helpSubtitle}>{helpMessage}</Text>
          </View>
        </View>

        {/* Navigation bar */}
        <View style={styles.navBar}>
          <Ionicons name="home-outline" size={28} color="#5A5A89" />
          <Ionicons name="checkmark-outline" size={28} color="#5A5A89" />
          <Ionicons name="book-outline" size={28} color="#5A5A89" />
          <Ionicons name="medical-outline" size={28} color="#5A5A89" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0ECFF',
  },
  contentContainer: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    color: '#5A5A89',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#5A5A89',
    textAlign: 'center',
    marginVertical: 10,
  },
  insightBox: {
    backgroundColor: '#CFCFF5',
    padding: 20,
    borderRadius: 16,
  },
  title: {
    fontSize: 18,
    color: '#5A5A89',
    fontWeight: '500',
    marginBottom: 15,
  },
  circleContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  circleText: {
    fontSize: 14,
    color: '#5A5A89',
    textAlign: 'center',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 8,
    borderColor: '#5A5A89',
    marginTop: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5A5A89',
  },
  statLabel: {
    fontSize: 14,
    color: '#5A5A89',
    marginTop: 5,
  },
  helpBox: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  helpTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#5A5A89',
  },
  helpSubtitle: {
    fontSize: 14,
    color: '#5A5A89',
    marginTop: 5,
    textAlign: 'center',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#CFCFF5',
    borderRadius: 12,
  },
});

export default MoodInsights;
