import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  useFonts,
  Sora_400Regular,
  Sora_700Bold,
} from "@expo-google-fonts/sora";
import AppLoading from "expo-app-loading";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Question1: undefined;
  Question2: undefined;
  Question3: undefined;
  Question4: undefined;
  Question5: undefined;
};

type Question4NavigationProp = StackNavigationProp<
  RootStackParamList,
  "Question4"
>;

type Props = {
  navigation: Question4NavigationProp;
};

type Option = {
  id: number;
  text: string;
};

const options: Option[] = [
  { id: 1, text: "Highly motivated" },
  { id: 2, text: "Moderately motivated" },
  { id: 3, text: "Rarely motivated" },
  { id: 4, text: "I don’t have any personal goals" },
];

const Question4: React.FC<Props> = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState<number>(2);

  let [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <View style={styles.content}>
          <ImageBackground
            source={require("../../assets/images/bg1.png")}
            style={styles.imageBackground}
            resizeMode="contain"
          ></ImageBackground>
          <View style={styles.progressContainer}>
            {[1, 2, 3, 4, 5].map((num) => (
              <View
                key={num}
                style={[
                  styles.progressCircle,
                  num === 4 && styles.activeProgressCircle,
                  num === 1 && styles.completedProgressCircle,
                  num === 2 && styles.completedProgressCircle,
                  num === 3 && styles.completedProgressCircle,
                ]}
              >
                {num === 4 && <Text style={styles.progressNumber}>4</Text>}
              </View>
            ))}
          </View>

          <Text style={styles.question}>
            How motivated do you feel to work toward your personal goals?
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
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.navButtonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => navigation.navigate("Question5")}
            >
              <Text style={styles.navButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
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

export default Question4;
