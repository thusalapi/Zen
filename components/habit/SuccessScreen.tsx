import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { NavigationProp } from "@react-navigation/native";

const SuccessScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const handleDone = () => {
    navigation.navigate("Home"); // Replace 'Home' with your actual home screen route name
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.checkmarkContainer}>
        <View style={styles.outerCircle}>
          <View style={styles.middleCircle}>
            <View style={styles.innerCircle}>
              <Icon name="checkmark" size={60} color="#4A4A4A" />
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.message}>You have created habit successfully</Text>
      <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF7F2",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  checkmarkContainer: {
    marginBottom: 40,
  },
  outerCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#A6A6D2",
    justifyContent: "center",
    alignItems: "center",
  },
  middleCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#C4C4E9",
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 20,
  },
  doneButton: {
    backgroundColor: "#D2B48C",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
    elevation: 2,
  },
  doneButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SuccessScreen;
