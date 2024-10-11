import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoodSelectorCarousel from "./MoodSelector";


const Stack = createNativeStackNavigator();

const MoodNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="moodhome">
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={MoodSelectorCarousel}
      />
    </Stack.Navigator>
  );
};

export default MoodNavigation;
