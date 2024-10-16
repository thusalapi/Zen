import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoodSelectionScreen from "./MoodOptions"; // Adjust as needed
import PepTalkScreen from "./PepTalk";
import MoodJournal from "./MoodDash";
import MoodInsights from "./Insights";
import MoodSelectorCarousel from "./MoodSelector"; // If this is also used

const Stack = createNativeStackNavigator();

const MoodNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="MoodSelection">
      <Stack.Screen
        name="MoodSelection" // Updated to a more descriptive name
        options={{ headerShown: false }}
        component={MoodSelectionScreen} 
      />
      <Stack.Screen
        name="PepTalk"
        options={{ headerShown: false }}
        component={PepTalkScreen}
      />
      <Stack.Screen
        name="dash"
        options={{ headerShown: false }}
        component={MoodJournal}
      />
      <Stack.Screen
        name="insight"
        options={{ headerShown: false }}
        component={MoodInsights}
      />
    </Stack.Navigator>
  );
};

export default MoodNavigation;
