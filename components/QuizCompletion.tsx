import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Sora_400Regular,
  Sora_700Bold,
} from "@expo-google-fonts/sora";
import AppLoading from "expo-app-loading";

const QuizCompletion: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#CDD2F6", "#E6E6FA"]} style={styles.gradient}>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/images/tick.png")}
              style={styles.tickImage}
            />
          </View>

          <Text style={styles.completionText}>
            You have completed the self assessment quiz!
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View Mind Exercises</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imageContainer: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  tickImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  completionText: {
    fontSize: 28,
    fontFamily: "Sora_700Bold",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#CBE8A6",
    paddingVertical: 15,
    paddingHorizontal: 60,
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
  buttonText: {
    fontFamily: "Sora_400Regular",
    fontSize: 18,
    color: "#000000",
    textAlign: "center",
  },
});

export default QuizCompletion;
