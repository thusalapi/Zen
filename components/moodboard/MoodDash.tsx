import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Dimensions,
  FlatList,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { width, height } = Dimensions.get('window');
const iPHONE_14_PRO_WIDTH = 393;
const widthScale = width / iPHONE_14_PRO_WIDTH;

type JournalEntry = {
  id: string;
  mood: string;
  description: string;
  date: string;
  timeframe: 'This Week' | 'Last Week' | 'August' | 'July';
};

type MoodJournalProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Journal'>;
  route: {
    params: {
      selectedMood?: string;
      moodDescription?: string;
    };
  };
};

const MoodJournal: React.FC<MoodJournalProps> = ({ route }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('This Week');
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Combine hardcoded entries with the new entry from route params
  const todayEntry = route.params?.selectedMood ? {
    id: 'today',
    mood: route.params.selectedMood,
    description: route.params.moodDescription || '',
    date: new Date().toISOString(),
    timeframe: 'This Week' as const,
  } : null;

  const hardcodedEntries: JournalEntry[] = [
    {
      id: '1',
      mood: 'Very Silent',
      description: "Feeling a little quiet today, but that's okay. Not every day needs to be full of hype.....",
      date: '2024-02-15',
      timeframe: 'This Week',
    },
    {
      id: '2',
      mood: 'Low Key Stressed',
      description: "Ugh, today's been a lot. My brain's running at 100 mph, andUgh, today's been a lot. My brain's running at 100mph, andUgh, today's been and.....",
      date: '2024-02-14',
      timeframe: 'This Week',
    },
    {
      id: '3',
      mood: 'W Day!!',
      description: "Girl bossing through life today! Everything just clicked. The sun was shining, and I totally slayed that work presentation. Feeling like I'm on top of the world. Note to self: remember this moment when things feel tough. You got this, bestie!....",
      date: '2024-02-13',
      timeframe: 'This Week',
    },
  ];

  const allEntries = todayEntry 
    ? [todayEntry, ...hardcodedEntries]
    : hardcodedEntries;

  const timeframes = ['This Week', 'Last Week', 'August', 'July'];

  const filteredEntries = allEntries.filter(
    entry => entry.timeframe === selectedTimeframe
  );

  const renderTimeframeButton = (timeframe: string) => (
    <TouchableOpacity
      style={[
        styles.timeframeButton,
        selectedTimeframe === timeframe && styles.selectedTimeframe,
      ]}
      onPress={() => setSelectedTimeframe(timeframe)}
    >
      <Text style={[
        styles.timeframeText,
        selectedTimeframe === timeframe && styles.selectedTimeframeText,
      ]}>
        {timeframe}
      </Text>
    </TouchableOpacity>
  );

  const renderJournalCard = ({ item }: { item: JournalEntry }) => (
    <TouchableOpacity
      style={styles.journalCard}
      onPress={() => {
        setSelectedEntry(item);
        setModalVisible(true);
      }}
    >
      <Text style={styles.cardMood}>{item.mood}</Text>
      <Text style={styles.cardDescription} numberOfLines={3}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Journal</Text>
        <TouchableOpacity>
          <Text style={styles.historyIcon}>↺</Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.timeframeContainer}
      >
        {timeframes.map(timeframe => renderTimeframeButton(timeframe))}
      </ScrollView>

      <FlatList
        data={filteredEntries}
        renderItem={renderJournalCard}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.journalList}
      />

      <TouchableOpacity style={styles.insightsButton}>
        <Text style={styles.insightsText}>Mood Insights ⟶</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalMood}>{selectedEntry?.mood}</Text>
            <ScrollView>
              <Text style={styles.modalDescription}>
                {selectedEntry?.description}
              </Text>
            </ScrollView>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F4F2',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20 * widthScale,
    paddingTop: 60 * widthScale,
  },
  title: {
    fontSize: 32 * widthScale,
    fontWeight: '700',
    color: '#4F3422',
  },
  historyIcon: {
    fontSize: 24 * widthScale,
    color: '#5D4037',
  },
  timeframeContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20 * widthScale,
    marginVertical: 15 * widthScale,
    
  },
  timeframeButton: {
    paddingHorizontal: 15 * widthScale,
    paddingVertical: 8 * widthScale,
    marginRight: 10 * widthScale,
    borderRadius: 20 * widthScale,
  },
  selectedTimeframe: {
    backgroundColor: '#BC9680',
    height: 40 * widthScale,
  },
  timeframeText: {
    color: '#8D6E63',
    fontSize: 16 * widthScale,
  },
  selectedTimeframeText: {
    color: 'white',
  },
  journalList: {
    paddingHorizontal: 20 * widthScale,
  },
  journalCard: {
    backgroundColor: 'white',
    borderRadius: 15 * widthScale,
    padding: 15 * widthScale,
    marginBottom: 15 * widthScale,
  },
  cardMood: {
    fontSize: 20 * widthScale,
    fontWeight: '600',
    color: '#4F3422',
    marginBottom: 5 * widthScale,
  },
  cardDescription: {
    fontSize: 16 * widthScale,
    color: '#4F3422',
  },
  insightsButton: {
    alignSelf: 'center',
    marginVertical: 20 * widthScale,
  },
  insightsText: {
    color: '#BC9680',
    fontSize: 18 * widthScale,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20 * widthScale,
    padding: 20 * widthScale,
    width: '90%',
    maxHeight: '80%',
  },
  modalMood: {
    fontSize: 24 * widthScale,
    fontWeight: '700',
    color: '#5D4037',
    marginBottom: 10 * widthScale,
  },
  modalDescription: {
    fontSize: 18 * widthScale,
    color: '#8D6E63',
  },
  closeButton: {
    marginTop: 20 * widthScale,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: '#CB997E',
    fontSize: 18 * widthScale,
  },
});

export default MoodJournal;