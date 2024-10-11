import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Dimensions,
  FlatList,
    Animated,
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

const MoodJournal: React.FC<MoodJournalProps> = ({ navigation,route }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('This Week');
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

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
    description: "Feeling a little quiet today, but that's okay. Sometimes I need those quieter moments to recharge and reflect. It's a reminder that not every day needs to be full of hype or noise; stillness has its own beauty.",
    date: '2024-02-15',
    timeframe: 'This Week',
  },
  {
    id: '2',
    mood: 'Low Key Stressed',
    description: "Ugh, today's been a lot. My brain's running at 100 mph, and it's hard to catch a break. Between work demands and personal responsibilities, I feel the pressure building up. I'm hoping to find a moment of calm soon.",
    date: '2024-02-14',
    timeframe: 'This Week',
  },
  {
    id: '3',
    mood: 'W Day!!',
    description: "Girl bossing through life today! Everything just clicked, and I felt unstoppable. The sun was shining, I aced that work presentation, and even had time for a quick coffee break with friends. It's moments like these that remind me to embrace the highs.",
    date: '2024-02-13',
    timeframe: 'This Week',
  },
  {
    id: '4',
    mood: 'Feeling Grateful',
    description: "Today I’m just thankful for the little things. From a warm cup of coffee in the morning to the smiles of strangers I pass by, gratitude goes a long way. It’s the simple joys that remind me how rich life can be, even in the mundane.",
    date: '2024-02-12',
    timeframe: 'This Week',
  },
  // Entries for Last Week
  {
    id: '5',
    mood: 'A Bit Overwhelmed',
    description: "Last week was a rollercoaster. I felt like I was juggling too many things at once, trying to balance work, personal life, and some unexpected challenges. Yet, I’m learning that it’s okay to feel overwhelmed; it means I’m pushing my limits.",
    date: '2024-02-08',
    timeframe: 'Last Week',
  },
  {
    id: '6',
    mood: 'Feeling Hopeful',
    description: "Despite the chaos of last week, I found moments of peace and clarity. It taught me that even amidst challenges, there’s always a silver lining. I’m focusing on staying hopeful and embracing whatever comes next with an open heart.",
    date: '2024-02-07',
    timeframe: 'Last Week',
  },
  {
    id: '7',
    mood: 'Reflective',
    description: "Last week gave me time to think about my goals and aspirations. I took a step back and assessed where I am in life and where I want to go. It was an enlightening experience, and I feel more centered and ready to move forward.",
    date: '2024-02-06',
    timeframe: 'Last Week',
  },
  {
    id: '8',
    mood: 'Tired but Happy',
    description: "A busy week, but I accomplished so much that I feel fulfilled. Between work projects and personal commitments, I pushed through the fatigue. Now, I'm looking forward to some much-needed downtime to recharge and reflect on my achievements.",
    date: '2024-02-05',
    timeframe: 'Last Week',
  },
  // Entries for August
  {
    id: '9',
    mood: 'Summer Bliss',
    description: "August was all about relaxation and sunshine. I spent my days soaking up the sun, enjoying picnics at the park, and making unforgettable memories with friends. It was a month that reminded me of the joys of living in the moment.",
    date: '2024-08-25',
    timeframe: 'August',
  },
  {
    id: '10',
    mood: 'Reflective',
    description: "August provided me with a much-needed break from the hustle. I took time to reflect on my experiences and reassess my priorities. This month was a beautiful blend of relaxation and introspection, helping me prepare for the months ahead.",
    date: '2024-08-15',
    timeframe: 'August',
  },
  {
    id: '11',
    mood: 'Adventurous',
    description: "Went on a spontaneous trip this August that reignited my love for exploration. I visited new places, met amazing people, and tried activities I’d never imagined doing. Each experience filled me with excitement and a sense of adventure.",
    date: '2024-08-10',
    timeframe: 'August',
  },
  {
    id: '12',
    mood: 'Creative',
    description: "Spent a lot of time on my hobbies this August. I delved into painting, writing, and crafting. The creative flow I experienced was liberating and fulfilling. It's amazing how expressing oneself can bring so much joy and clarity.",
    date: '2024-08-01',
    timeframe: 'August',
  },
  // Entries for July
  {
    id: '13',
    mood: 'Busy but Productive',
    description: "July was filled with projects and deadlines, but I managed to stay focused and productive. I learned a lot about time management and pushing through challenges. There’s a satisfaction in knowing I achieved my goals despite the busyness.",
    date: '2024-07-30',
    timeframe: 'July',
  },
  {
    id: '14',
    mood: 'Family Time',
    description: "Spent quality time with family this July, creating memories that I’ll cherish forever. From game nights to family barbecues, those moments reminded me of the importance of connection and support in our lives.",
    date: '2024-07-15',
    timeframe: 'July',
  },
  {
    id: '15',
    mood: 'Enjoying the Sun',
    description: "July brought beautiful weather, and I made sure to enjoy it every day. I went to the beach, had picnics, and took long walks. It was a month full of sunshine and laughter, making me appreciate the warmth of summer.",
    date: '2024-07-10',
    timeframe: 'July',
  },
  {
    id: '16',
    mood: 'Feeling Inspired',
    description: "July was a month of new ideas and creativity. I attended workshops, read inspiring books, and met creative people. I feel motivated and ready to channel this inspiration into my projects moving forward.",
    date: '2024-07-05',
    timeframe: 'July',
  },
];




  const allEntries = todayEntry 
    ? [todayEntry, ...hardcodedEntries]
    : hardcodedEntries;

  const timeframes = ['This Week', 'Last Week', 'August', 'July'];

  const filteredEntries = allEntries.filter(
    entry => entry.timeframe === selectedTimeframe
  );

    const openModal = (entry: JournalEntry) => {
    setSelectedEntry(entry);
    setModalVisible(true);
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 0.9,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setModalVisible(false);
      setSelectedEntry(null);
    });
  };

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
      onPress={() => openModal(item)}
    >
      <Text style={styles.cardMood}>{item.mood}</Text>
      <Text style={styles.cardDescription} numberOfLines={16}>
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

      <TouchableOpacity 
        style={styles.insightsButton}
        onPress={() => navigation.navigate('insight')}
      >
        <Text style={styles.insightsText}>Mood Insights ⟶</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={closeModal}
      >
        <Animated.View 
          style={[
            styles.modalContainer, 
            { opacity: fadeAnim }
          ]}
        >
          <Animated.View 
            style={[
              styles.modalContent,
              { transform: [{ scale: scaleAnim }] }
            ]}
          >
            <Text style={styles.modalMood}>{selectedEntry?.mood}</Text>
            <ScrollView>
              <Text style={styles.modalDescription}>
                {selectedEntry?.description}
              </Text>
            </ScrollView>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={closeModal}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
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
    marginBottom: 20 * widthScale,
    height: '8%',
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
    marginTop: '0%',
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
});

export default MoodJournal;