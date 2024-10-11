import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Svg, { Circle } from 'react-native-svg';

const { width } = Dimensions.get('window');
const iPHONE_14_PRO_WIDTH = 393;
const widthScale = width / iPHONE_14_PRO_WIDTH;

type MoodInsightsProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MoodInsights'>;
};

const MoodInsights: React.FC<MoodInsightsProps> = ({ navigation }) => {
  // Remove animated values
  const circleProgress = 0.67; // Fixed value for simplicity

  const AnimatedCircle = () => {
    const circumference = 2 * Math.PI * 25; // radius is 25
    const strokeDashoffset = circumference * (1 - circleProgress); // Calculate offset

    return (
      <Svg height="60" width="60">
        <Circle
          cx="30"
          cy="30"
          r="25"
          stroke="#8D6E63"
          strokeWidth="5"
          fill="transparent"
        />
        <Circle
          cx="30"
          cy="30"
          r="25"
          stroke="#5D4037"
          strokeWidth="5"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </Svg>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Mood Insights</Text>
      </TouchableOpacity>

      <View style={styles.mainCard}>
        <Text style={styles.title}>You are... not okay</Text>
        <Text style={styles.subtitle}>Rivin, You were sad most of this month :(</Text>

        <View style={styles.progressContainer}>
          <AnimatedCircle />
          <View style={styles.progressTextContainer}>
            <Text style={styles.progressText}>You didn't feel good</Text>
            <Text style={styles.progressText}>for 67% of this month</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statIcon}>⭐</Text>
            <Text style={styles.statNumber}>26</Text>
            <Text style={styles.statLabel}>Journal Logs</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statIcon}>⏱️</Text>
            <Text style={styles.statNumber}>300h</Text>
            <Text style={styles.statLabel}>Hours Spent</Text>
          </View>
        </View>

        <View style={styles.seekHelpContainer}>
          <View style={styles.wavyLine} />
          <Text style={styles.seekHelpTitle}>Seek Help</Text>
          <Text style={styles.seekHelpText}>
            Your mood was all over{'\n'}the place this month!
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F4F2',
    paddingTop: 60 * widthScale,
  },
  backButton: {
    paddingHorizontal: 20 * widthScale,
    marginBottom: 20 * widthScale,
  },
  backButtonText: {
    fontSize: 24 * widthScale,
    fontWeight: '600',
    color: '#4F3422',
  },
  mainCard: {
    backgroundColor: 'white',
    margin: 20 * widthScale,
    borderRadius: 20 * widthScale,
    padding: 20 * widthScale,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24 * widthScale,
    fontWeight: '700',
    color: '#4F3422',
    marginBottom: 10 * widthScale,
  },
  subtitle: {
    fontSize: 18 * widthScale,
    color: '#4F3422',
    marginBottom: 20 * widthScale,
    fontWeight: '500',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#BC9680',
    padding: 15 * widthScale,
    borderRadius: 15 * widthScale,
    marginBottom: 20 * widthScale,
  },
  progressTextContainer: {
    marginLeft: 15 * widthScale,
    fontWeight: 'bold',
  },
  progressText: {
    color: '#4F3422',
    fontWeight: 'bold',
    fontSize: 16 * widthScale,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20 * widthScale,
  },
  statBox: {
    backgroundColor: '#BC9680',
    padding: 15 * widthScale,
    borderRadius: 15 * widthScale,
    alignItems: 'center',
    flex: 0.47,
  },
  statIcon: {
    fontSize: 24 * widthScale,
    marginBottom: 5 * widthScale,
  },
  statNumber: {
    fontSize: 24 * widthScale,
    fontWeight: '700',
    color: '#4F3422',
  },
  statLabel: {
    fontSize: 16 * widthScale,
    fontWeight: 'bold',
    color: '#4F3422',
  },
  seekHelpContainer: {
    backgroundColor: '#BC9680',
    padding: 20 * widthScale,
    borderRadius: 15 * widthScale,
    alignItems: 'center',
  },
  wavyLine: {
    height: 2,
    backgroundColor: '#4F3422',
    width: '80%',
    marginBottom: 10 * widthScale,
  },
  seekHelpTitle: {
    fontSize: 24 * widthScale,
    fontWeight: '700',
    color: '#4F3422',
    marginBottom: 5 * widthScale,
  },
  seekHelpText: {
    fontSize: 16 * widthScale,
    color: '#4F3422',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#DDBEA9',
    paddingVertical: 10 * widthScale,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 20 * widthScale,
    borderTopRightRadius: 20 * widthScale,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 24 * widthScale,
  },
  navText: {
    color: '#5D4037',
    fontSize: 12 * widthScale,
  },
});

export default MoodInsights;
