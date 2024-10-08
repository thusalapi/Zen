import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

const timeOptions = ['This Week', 'Last Week', 'August', 'July'];

export default function TimeSelector() {
  const [selectedTime, setSelectedTime] = useState('This Week');

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      style={styles.container}
    >
      {timeOptions.map((time) => (
        <TouchableOpacity
          key={time}
          style={[
            styles.timeButton,
            selectedTime === time && styles.selectedTimeButton
          ]}
          onPress={() => setSelectedTime(time)}
        >
          <Text style={[
            styles.timeButtonText,
            selectedTime === time && styles.selectedTimeButtonText
          ]}>
            {time}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  timeButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#FFFFFF50',
  },
  selectedTimeButton: {
    backgroundColor: '#FFFFFF',
  },
  timeButtonText: {
    color: '#000',
    opacity: 0.6,
  },
  selectedTimeButtonText: {
    opacity: 1,
  },
});