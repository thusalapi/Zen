import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

interface FeeingSelectorProps {
  onSubmit?: (feeling: string, details: string) => void;
  onBack?: () => void;
}

const FeelingSelector: React.FC<FeeingSelectorProps> = ({ onSubmit, onBack }) => {
  const [selectedFeeling, setSelectedFeeling] = useState<string | null>(null);
  const [additionalDetails, setAdditionalDetails] = useState<string>('');

  const feelings: string[] = [
    'Absolute W day!',
    'In my Girl boss era',
    'Feelin\' kinda demure',
    'Low-key stressed :/'
  ];

  const handleSubmit = () => {
    if (onSubmit && selectedFeeling) {
      onSubmit(selectedFeeling, additionalDetails);
    }
  };

  const renderFeelingOption = (feeling: string) => (
    <TouchableOpacity
      key={feeling}
      style={[
        styles.feelingOption,
        selectedFeeling === feeling && styles.selectedOption
      ]}
      onPress={() => setSelectedFeeling(feeling)}
    >
      <Text style={[
        styles.feelingText,
        selectedFeeling === feeling && styles.selectedText
      ]}>
        {feeling}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tell us more about how you're feeling.!</Text>
      
      <View style={styles.optionsContainer}>
        {feelings.map(feeling => renderFeelingOption(feeling))}
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
          Wanna share more deets? Type 'em here, bestie!
        </Text>
        <TextInput
          style={styles.textInput}
          multiline
          placeholder="....."
          value={additionalDetails}
          onChangeText={setAdditionalDetails}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onBack}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.submitButton]}
          onPress={handleSubmit}
        >
          <Text style={[styles.buttonText, styles.submitButtonText]}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F0FF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A7F',
    marginBottom: 20,
  },
  optionsContainer: {
    marginBottom: 20,
  },
  feelingOption: {
    backgroundColor: '#E6E6FA',
    padding: 15,
    borderRadius: 25,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#4B0082',
  },
  feelingText: {
    fontSize: 16,
    color: '#4B0082',
    textAlign: 'center',
  },
  selectedText: {
    color: '#FFFFFF',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: '#4B0082',
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 25,
    marginHorizontal: 5,
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#4B0082',
  },
  buttonText: {
    fontSize: 16,
    color: '#4B0082',
  },
  submitButtonText: {
    color: '#FFFFFF',
  },
});

export default FeelingSelector;