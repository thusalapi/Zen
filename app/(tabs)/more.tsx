import React from 'react';
import { View } from 'react-native';
import FeelingSelector from '../../components/FeelingSelector';

export default function MoreScreen() {
  const handleFeelingSubmit = (feeling: string, details: string) => {
    console.log('Selected feeling:', feeling);
    console.log('Additional details:', details);
    // Handle the submission here
  };

  const handleBack = () => {
    // Handle back navigation here
  };

  return (
    <View style={{ flex: 1 }}>
      <FeelingSelector 
        onSubmit={handleFeelingSubmit}
        onBack={handleBack}
      />
    </View>
  );
}