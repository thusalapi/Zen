import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { width, height } = Dimensions.get('window');
// iPhone 14 Pro dimensions
const iPHONE_14_PRO_WIDTH = 393;
const iPHONE_14_PRO_HEIGHT = 852;

// Scale factors for responsive design
const widthScale = width / iPHONE_14_PRO_WIDTH;
const heightScale = height / iPHONE_14_PRO_HEIGHT;

type RootStackParamList = {
  MoodSelector: undefined;
  PepTalk: undefined;
  NextScreen: undefined; // Replace with your actual next screen name
};

type PepTalkScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'PepTalk'>;
};

const PepTalkScreen: React.FC<PepTalkScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('dash'); // Replace with your actual next screen name
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Pep Talk</Text>
      <Text style={styles.message}>
        Hey, it's okay to feel a little off. Take a deep breath, slay your day, and remember, 
        stress doesn't stand a chance against your inner strength. You're doing amazing, demure queen!
      </Text>
      <Image 
        source={require('../../assets/images/peptalk.png')} // Update with your actual image path
        style={styles.illustration}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F4F2',
    paddingTop: 60 * heightScale,
    paddingHorizontal: 20 * widthScale,
    alignItems: 'center',
  },
  title: {
    fontSize: 32 * widthScale,
    fontWeight: '700',
    color: '#4F3422',
    marginBottom: 16 * heightScale,
  },
  message: {
    fontSize: 20 * widthScale,
    lineHeight: 28 * heightScale,
    color: '#BC9680',
    marginBottom: 24 * heightScale,
  },
  illustration: {
    width: '200%',
    height: 400 * heightScale,
    resizeMode: 'contain',
  },
});

export default PepTalkScreen;