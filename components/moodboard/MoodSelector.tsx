import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

interface MoodOption {
  id: number;
  image: any;
  backgroundColor: string;
}
const { width, height } = Dimensions.get('window');
// iPhone 14 Pro dimensions
const iPHONE_14_PRO_WIDTH = 393;
const iPHONE_14_PRO_HEIGHT = 852;

// Scale factors for responsive design
const widthScale = width / iPHONE_14_PRO_WIDTH;
const heightScale = height / iPHONE_14_PRO_HEIGHT;
const { width: screenWidth } = Dimensions.get('window');

const MoodSelectorCarousel: React.FC = () => {
    
  const [activeIndex, setActiveIndex] = useState(0);

  const moodOptions: MoodOption[] = [
    {
      id: 1,
      image: require('../../assets/images/mood1.png'),
      backgroundColor: '#FFE4D6',
    },
    {
      id: 2,
      image: require('../../assets/images/mood2.png'),
      backgroundColor: '#FFE4D6',
    },
    {
      id: 3,
      image: require('../../assets/images/mood3.png'),
      backgroundColor: '#FFE4D6',
    },
    {
      id: 4,
      image: require('../../assets/images/mood4.png'),
      backgroundColor: '#FFE4D6',
    },
  ];

  const renderMoodItem = (item: MoodOption) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.title}>Tell us how you{'\n'}are feeling{'\n'}today?</Text>
        <Image source={item.image} style={styles.moodImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        loop={false}
        width={screenWidth}
        height={screenWidth * 1.5}
        data={moodOptions}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => setActiveIndex(index)}
        renderItem={({ item }) => renderMoodItem(item)}
      />
      <Image 
        source={require('../../assets/images/brownvector.png')}
        style={styles.bottomVector}
      />
      <TouchableOpacity style={styles.nextButton}>
        <View style={styles.nextButtonInner} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4D6',
  },
  slide: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#5D4037',
    textAlign: 'left',
    marginBottom: 20,
  },
  moodImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
  bottomVector: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    left: 0,
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonInner: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
  },
});

export default MoodSelectorCarousel;