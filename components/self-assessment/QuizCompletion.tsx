import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
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
      <View style={styles.content}>
        <ImageBackground
          source={require("../../assets/images/bg1.png")}
          style={styles.imageBackground}
          resizeMode="contain"
        ></ImageBackground>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/tick.png")}
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
    alignItems: "center",
    padding: 20,
  },
  imageContainer: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 160,
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
    marginBottom: 120,
    marginTop: 40,
  },
  button: {
    backgroundColor: "#4F3422",
    width: "100%",
    padding: 20,
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
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
});

export default QuizCompletion;
