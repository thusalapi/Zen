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
import {
  useFonts,
  Sora_400Regular,
  Sora_600SemiBold,
  Sora_700Bold,
} from "@expo-google-fonts/sora";
import AppLoading from "expo-app-loading";

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
      <Text style={styles.exerciseDuration}>{duration}</Text>
    </View>
  </View>
);

const SelfAssessmentHome: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_600SemiBold,
    Sora_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
            source={require("../assets/images/header.png")}
            style={styles.brainImage}
          />
        </View>

        <TouchableOpacity style={styles.assessmentButton}>
          <Text style={styles.assessmentButtonText}>
            Take a Self-Assessment
          </Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Recommended Exercises</Text>

        <ExerciseCard
          title="Deep Breathing"
          duration="(20 minutes)"
          imageSource={require("../assets/images/exercise1.png")}
        />
        <ExerciseCard
          title="Visualization"
          duration="(20 minutes)"
          imageSource={require("../assets/images/exercise2.png")}
        />
        <ExerciseCard
          title="Mindful Walk"
          duration="(20 minutes)"
          imageSource={require("../assets/images/exercise3.png")}
        />
        <ExerciseCard
          title="Gratitude Pause"
          duration="(20 minutes)"
          imageSource={require("../assets/images/exercise4.png")}
        />
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
    fontSize: 28,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: "Sora_400Regular",
    fontSize: 16,
    color: "#fff",
  },
  brainImage: {
    width: 180,
    height: 180,
    resizeMode: "contain",
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
