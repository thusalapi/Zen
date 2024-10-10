import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts,
  Sora_400Regular,
  Sora_600SemiBold,
  Sora_700Bold,
} from "@expo-google-fonts/sora";
import AppLoading from "expo-app-loading";

interface DeepBreathingExerciseProps {
  onBackPress: () => void;
  onViewTutorial: () => void;
}

const ExercisePage: React.FC<DeepBreathingExerciseProps> = ({
  onBackPress,
  onViewTutorial,
}) => {
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
          <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Deep Breathing</Text>
        </View>

        <Image
          source={require("../assets/images/exercise-big.png")}
          style={styles.exerciseImage}
        />

        <View style={styles.contentContainer}>
          <Text style={styles.duration}>Duration - 20 minutes</Text>

          <Text style={styles.description}>
            Deep breathing exercises are a powerful tool to help calm the mind
            and relax the body. To practice, start by sitting or lying down in a
            comfortable position. Close your eyes and take a slow, deep breath
            in through your nose, allowing the air to fill your lungs
            completely.
          </Text>
          <Text style={styles.description}>
            With each breath, feel a sense of calm wash over you, as your heart
            rate slows, your muscles relax, and your mind clears, leaving you
            refreshed and centered.
          </Text>

          <TouchableOpacity
            style={styles.tutorialButton}
            onPress={onViewTutorial}
          >
            <Text style={styles.tutorialButtonText}>View Video Tutorial</Text>
          </TouchableOpacity>
        </View>
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
    flexGrow: 1,
    marginHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    fontFamily: "Sora_700Bold",
    fontSize: 24,
  },
  exerciseImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  contentContainer: {
    padding: 16,
    backgroundColor: "#E8C6B7",
    borderRadius: 20,
    marginTop: -20,
  },
  duration: {
    fontFamily: "Sora_600SemiBold",
    fontSize: 24,
    marginBottom: 16,
  },
  description: {
    fontFamily: "Sora_400Regular",
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 24,
  },
  tutorialButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    width: "100%",
    borderRadius: 15,
    alignItems: "center",
    alignSelf: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  tutorialButtonText: {
    fontFamily: "Sora_600SemiBold",
    fontSize: 20,
    color: "#000000",
  },
});

export default ExercisePage;
