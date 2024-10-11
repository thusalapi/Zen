import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SelfAssessmentHome from "./SelfAssessmentHome";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Question5 from "./Question5";
import ExercisePage from "./ExercisePage";
import Exercises from "./Exercises";

const Stack = createStackNavigator();

const Navigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SelfAssessmentHome">
      <Stack.Screen
        name="SelfAssessmentHome"
        options={{ headerShown: false }}
        component={SelfAssessmentHome}
      />
      <Stack.Screen
        name="Question1"
        options={{ headerShown: false }}
        component={Question1}
      />
      <Stack.Screen
        name="Question2"
        options={{ headerShown: false }}
        component={Question2}
      />
      <Stack.Screen
        name="Question3"
        options={{ headerShown: false }}
        component={Question3}
      />
      <Stack.Screen
        name="Question4"
        options={{ headerShown: false }}
        component={Question4}
      />
      <Stack.Screen
        name="Question5"
        options={{ headerShown: false }}
        component={Question5}
      />
      <Stack.Screen
        name="Exercises"
        options={{ headerShown: false }}
        component={Exercises}
      />
      <Stack.Screen
        name="ExercisePage"
        options={{ headerShown: false }}
        component={ExercisePage}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
