import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts,
  Sora_400Regular,
  Sora_600SemiBold,
  Sora_700Bold,
} from "@expo-google-fonts/sora";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  ExercisePage: { exercise: Exercise };
  Exercises: undefined;
  SelfAssessmentHome: undefined;
};

type ExercisesNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Exercises"
>;

interface Exercise {
  id: string;
  title: string;
  duration: string;
  image: any;
}

const exercisesData: Exercise[] = [
  {
    id: "1",
    title: "Deep Breathing",
    duration: "20 minutes",
    image: require("../../assets/images/exercise1.png"),
  },
  {
    id: "2",
    title: "Visualization",
    duration: "20 minutes",
    image: require("../../assets/images/exercise2.png"),
  },
  {
    id: "3",
    title: "Mindful Walk",
    duration: "20 minutes",
    image: require("../../assets/images/exercise3.png"),
  },
  {
    id: "4",
    title: "Gratitude Pause",
    duration: "20 minutes",
    image: require("../../assets/images/exercise4.png"),
  },
];

const ExerciseItem: React.FC<{ item: Exercise; onPress: () => void }> = ({
  item,
  onPress,
}) => (
  <TouchableOpacity style={styles.exerciseItem} onPress={onPress}>
    <Image source={item.image} style={styles.exerciseImage} />
    <View style={styles.exerciseInfo}>
      <Text style={styles.exerciseTitle}>{item.title}</Text>
      <Text style={styles.exerciseDuration}>{item.duration}</Text>
    </View>
  </TouchableOpacity>
);

const Exercises: React.FC = () => {
  const navigation = useNavigation<ExercisesNavigationProp>();
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
          <TouchableOpacity
            onPress={() => navigation.navigate("SelfAssessmentHome")}
            style={styles.backButton}
          >
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Mind Exercises</Text>
        </View>

        <FlatList
          data={exercisesData}
          renderItem={({ item }) => (
            <ExerciseItem
              item={item}
              onPress={() =>
                navigation.navigate("ExercisePage", { exercise: item })
              }
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    width: "100%",
  },
  scrollContent: {
    flexGrow: 1,
    marginHorizontal: 16,
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
  listContainer: {
    marginTop: 16,
  },
  exerciseItem: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 16,
    overflow: "hidden",
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
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  exerciseInfo: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  exerciseTitle: {
    fontFamily: "Sora_600SemiBold",
    fontSize: 18,
    marginBottom: 4,
  },
  exerciseDuration: {
    fontFamily: "Sora_400Regular",
    fontSize: 14,
    color: "#666",
  },
});

export default Exercises;
