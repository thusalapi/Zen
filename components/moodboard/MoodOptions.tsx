import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { width, height } = Dimensions.get('window');
const iPHONE_14_PRO_WIDTH = 393;
const iPHONE_14_PRO_HEIGHT = 852;

const widthScale = width / iPHONE_14_PRO_WIDTH;
const heightScale = height / iPHONE_14_PRO_HEIGHT;

type RootStackParamList = {
  MoodCarousel: undefined;
  MoodSelection: undefined;
  PepTalk: undefined;
};

type MoodSelectionProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MoodSelection'>;
};

const MoodSelectionScreen: React.FC<MoodSelectionProps> = ({ navigation }) => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [additionalDetails, setAdditionalDetails] = useState('');

  const moodOptions = [
    'Absolute W day!',
    'In my Girl boss era',
    'Feelin\' kinda demure',
    'Low-key stressed :/'
  ];

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Text style={styles.title}>Tell us how you{'\n'}are feeling{'\n'}today?</Text>
      
      <View style={styles.buttonsContainer}>
        {moodOptions.map((mood, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.moodButton,
              selectedMood === mood && styles.selectedMoodButton
            ]}
            onPress={() => setSelectedMood(mood)}
          >
            <Text style={[
              styles.moodButtonText,
              selectedMood === mood && styles.selectedMoodButtonText
            ]}>
              {mood}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.detailsTitle}>Wanna share more deets?{'\n'}Type 'em here, bestie!</Text>
        <TextInput
          style={styles.textInput}
          multiline
          numberOfLines={4}
          placeholder="....."
          placeholderTextColor="#8D6E63"
          value={additionalDetails}
          onChangeText={setAdditionalDetails}
        />
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => navigation.navigate('PepTalk')}
        >
          <View style={styles.nextButtonInner} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4D6',
    paddingTop: 60 * heightScale,
  },
  title: {
    fontSize: 32 * widthScale,
    fontWeight: '700',
    color: '#5D4037',
    textAlign: 'left',
    paddingHorizontal: 20 * widthScale,
    marginBottom: 30 * heightScale,
  },
  buttonsContainer: {
    paddingHorizontal: 20 * widthScale,
  },
  moodButton: {
    backgroundColor: 'white',
    borderRadius: 25 * widthScale,
    paddingVertical: 15 * heightScale,
    paddingHorizontal: 20 * widthScale,
    marginBottom: 15 * heightScale,
  },
  selectedMoodButton: {
    backgroundColor: '#8D6E63',
  },
  moodButtonText: {
    fontSize: 18 * widthScale,
    color: '#5D4037',
    textAlign: 'center',
  },
  selectedMoodButtonText: {
    color: 'white',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  detailsTitle: {
    fontSize: 24 * widthScale,
    fontWeight: '600',
    color: '#5D4037',
    paddingHorizontal: 20 * widthScale,
    marginBottom: 10 * heightScale,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 20 * widthScale,
    paddingHorizontal: 20 * widthScale,
    paddingTop: 15 * heightScale,
    paddingBottom: 15 * heightScale,
    marginHorizontal: 20 * widthScale,
    marginBottom: 20 * heightScale,
    fontSize: 16 * widthScale,
    color: '#5D4037',
    height: 100 * heightScale,
    textAlignVertical: 'top',
  },
  nextButton: {
    position: 'absolute',
    bottom: 20 * heightScale,
    right: 20 * widthScale,
    width: 40 * widthScale,
    height: 40 * widthScale,
    borderRadius: 20 * widthScale,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonInner: {
    width: 20 * widthScale,
    height: 20 * heightScale,
    borderRadius: 10 * widthScale,
    backgroundColor: '#E0E0E0',
  },
});

export default MoodSelectionScreen;