import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function InsightsButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Mood Insights</Text>
      <Feather name="arrow-right" size={20} color="#6B4EFF" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  text: {
    color: '#6B4EFF',
    marginRight: 5,
  },
});