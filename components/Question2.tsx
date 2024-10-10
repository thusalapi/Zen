import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
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
  { id: 1, text: "Very well, no issues" },
  { id: 2, text: "Mostly well, minor challenges" },
  { id: 3, text: "Struggling occasionally" },
  { id: 4, text: "Struggling often" },
];

const Question2: React.FC = () => {
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
      <ImageBackground
        source={require("../assets/images/bg1.png")}
        style={styles.imageBackground}
        resizeMode="contain"
      ></ImageBackground>
      <View style={styles.content}>
        <View style={styles.progressContainer}>
          {[1, 2, 3, 4, 5].map((num) => (
            <View
              key={num}
              style={[
                styles.progressCircle,
                num === 2 && styles.activeProgressCircle,
                num === 1 && styles.completedProgressCircle,
              ]}
            >
              {num === 2 && <Text style={styles.progressNumber}>2</Text>}
            </View>
          ))}
        </View>

        <Text style={styles.question}>
          How well are you managing your daily responsibilities?
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    fontFamily: "Sora",
    backgroundColor: "#f1f1f1",
  },
  imageBackground: {
    width: "100%",
    height: "65.2%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 60,
    marginTop: 80,
  },
  progressCircle: {
    width: 40,
    height: 40,
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
    backgroundColor: "#CDD2F6",
  },
  progressNumber: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Sora_700Bold",
  },
  question: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 100,
    fontFamily: "Sora_700Bold",
  },
  optionButton: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 16,
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
    backgroundColor: "#CDD2F6",
  },
  optionText: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Sora_400Regular",
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 80,
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

export default Question2;
