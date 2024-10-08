import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface JournalEntryProps {
  title: string;
  content: string;
}

export default function JournalEntry({ title, content }: JournalEntryProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF80',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    color: '#666',
  },
});

//Claude-API: 
