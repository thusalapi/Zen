import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Sora_400Regular,
  Sora_700Bold,
} from "@expo-google-fonts/sora";
import AppLoading from "expo-app-loading";

type Option = {
  id: number;
  text: string;
};

const options: Option[] = [
  { id: 1, text: "Physical activities" },
  { id: 2, text: "Relaxation techniques" },
  { id: 3, text: "Talking to friends or family" },
  { id: 4, text: "Distracting myself" },
  { id: 5, text: "I struggle to cope with stress" },
];

const Question3: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number>(2);

  let [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#CDD2F6", "#E6E6FA"]} style={styles.gradient}>
        <View style={styles.content}>
          <View style={styles.progressContainer}>
            {[1, 2, 3, 4, 5].map((num) => (
              <View
                key={num}
                style={[
                  styles.progressCircle,
                  num === 3 && styles.activeProgressCircle,
                  num === 1 && styles.completedProgressCircle,
                  num === 2 && styles.completedProgressCircle,
                ]}
              >
                {num === 3 && <Text style={styles.progressNumber}>3</Text>}
              </View>
            ))}
          </View>

          <Text style={styles.question}>
            How do you typically cope with stress?
          </Text>

          {options.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionButton,
                selectedOption === option.id && styles.selectedOption,
              ]}
              onPress={() => setSelectedOption(option.id)}
            >
              <Text style={styles.optionText}>{option.text}</Text>
            </TouchableOpacity>
          ))}

          <View style={styles.navigationContainer}>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navButtonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Sora",
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  progressCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#000",
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  activeProgressCircle: {
    backgroundColor: "#FFF",
  },
  completedProgressCircle: {
    backgroundColor: "#A5F243",
  },
  progressNumber: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Sora_700Bold",
  },
  question: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    fontFamily: "Sora_700Bold",
  },
  optionButton: {
    backgroundColor: "#CBE8A6",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  selectedOption: {
    backgroundColor: "#A5F243",
  },
  optionText: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Sora_400Regular",
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  navButton: {
    padding: 10,
  },
  navButtonText: {
    fontSize: 16,
    color: "#4B0082",
    fontFamily: "Sora_400Regular",
  },
});

export default Question3;
