import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import TimeSelector from '../../components/TimeSelector';
import JournalEntry from '../../components/JournalEntry';
import InsightsButton from '../../components/InsightsButton';

export default function JournalScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Journal</Text>
        <TouchableOpacity>
          <Feather name="clock" size={24} color="#6B4EFF" />
        </TouchableOpacity>
      </View>
      
      <TimeSelector />
      
      <ScrollView style={styles.entriesContainer}>
        <JournalEntry
          title="Low Key Stressed"
          content="Ugh, today's been a lot. My brain's running at 100 mph, and it feels like I'm juggling a million things. But hey, I got through it. Taking a deep breath and reminding..."
        />
        <JournalEntry
          title="Very Silent"
          content="Feeling a little quiet today, but that's okay. Not every day needs to be full of hype. Took it slow, sipped on some tea, and listened to my thoughts. Sometimes it's cool to just vibe..."
        />
        <JournalEntry
          title="W Day!!"
          content="Girl bossing through life today! Everything just clicked. The sun was shining, and I totally slayed that work presentation. Feeling like I'm on top of the world. Note to self: remember this moment when things feel tough. You got this, bestie!..."
        />
      </ScrollView>
      
      <InsightsButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E0FF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  entriesContainer: {
    padding: 20,
  },
});