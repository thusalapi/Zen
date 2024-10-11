import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import {
  useFonts,
  Sora_400Regular,
  Sora_600SemiBold,
  Sora_700Bold,
} from "@expo-google-fonts/sora";
import AppLoading from "expo-app-loading";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  SelfAssessmentHome: undefined;
  Question1: undefined;
  Question2: undefined;
  Question3: undefined;
  Question4: undefined;
  Question5: undefined;
  ExercisePage: undefined;
};

type SelfAssessmentHomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SelfAssessmentHome"
>;

interface ExerciseProps {
  title: string;
  duration: string;
  imageSource: any;
}

const ExerciseCard: React.FC<ExerciseProps> = ({
  title,
  duration,
  imageSource,
}) => (
  <View style={styles.exerciseCard}>
    <Image source={imageSource} style={styles.exerciseImage} />
    <View style={styles.exerciseInfo}>
      <Text style={styles.exerciseTitle}>{title}</Text>
      <View style={styles.horizontalLine} />
      <Text style={styles.exerciseDuration}>{duration}</Text>
    </View>
  </View>
);

const SelfAssessmentHome: React.FC = () => {
  const navigation = useNavigation<SelfAssessmentHomeScreenNavigationProp>();

  let [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_600SemiBold,
    Sora_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleNavigateToQuestion1 = () => {
    navigation.navigate("Question1");
  };

  const handleNavigateToExercise = () => {
    navigation.navigate("ExercisePage");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.title}>Understand Your Mind</Text>
            <Text style={styles.subtitle}>
              Observe your thoughts and emotions.
            </Text>
          </View>
          <Image
            source={require("../../assets/images/header.png")}
            style={styles.brainImage}
          />
        </View>

        <TouchableOpacity
          style={styles.assessmentButton}
          onPress={handleNavigateToQuestion1}
        >
          <Text style={styles.assessmentButtonText}>
            Take a Self-Assessment
          </Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Recommended Exercises</Text>

        <TouchableOpacity onPress={handleNavigateToExercise}>
          <ExerciseCard
            title="Deep Breathing"
            duration="(20 minutes)"
            imageSource={require("../../assets/images/exercise1.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigateToExercise}>
          <ExerciseCard
            title="Visualization"
            duration="(20 minutes)"
            imageSource={require("../../assets/images/exercise2.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigateToExercise}>
          <ExerciseCard
            title="Mindful Walk"
            duration="(20 minutes)"
            imageSource={require("../../assets/images/exercise3.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigateToExercise}>
          <ExerciseCard
            title="Gratitude Pause"
            duration="(20 minutes)"
            imageSource={require("../../assets/images/exercise4.png")}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#BC9680",
    padding: 10,
    borderRadius: 20,
  },
  headerText: {
    flex: 1,
    marginRight: 20,
  },
  title: {
    fontFamily: "Sora_700Bold",
    fontSize: 26,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: "Sora_400Regular",
    fontSize: 14,
    color: "#fff",
  },
  brainImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  horizontalLine: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginVertical: 8,
    width: "100%",
  },
  assessmentButton: {
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 30,
    backgroundColor: "#4F3422",
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  assessmentButtonText: {
    fontFamily: "Sora_600SemiBold",
    fontSize: 20,
    color: "#fff",
  },
  sectionTitle: {
    fontFamily: "Sora_700Bold",
    fontSize: 22,
    marginBottom: 15,
  },
  exerciseCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  exerciseImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    margin: 10,
  },
  exerciseInfo: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },
  exerciseTitle: {
    fontFamily: "Sora_600SemiBold",
    fontSize: 18,
    marginBottom: 5,
  },
  exerciseDuration: {
    fontFamily: "Sora_400Regular",
    fontSize: 14,
    color: "#666",
  },
});

export default SelfAssessmentHome;
