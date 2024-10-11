import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoodSelectorCarousel from "./MoodSelector";
import PepTalkScreen from "./PepTalk";
import MoodJournal from "./MoodDash";
import MoodInsights from "./Insights";
import MoodSelectionScreen from "./MoodOptions";


const Stack = createNativeStackNavigator();

const MoodNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="moodhome">
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={MoodJournal} 
      />
      <Stack.Screen
        name="peptalk"
        options={{ headerShown: false }}
        component={MoodSelectorCarousel}
      />
      <Stack.Screen
        name="select"
        options={{ headerShown: false }}
        component={PepTalkScreen}
      />
      <Stack.Screen
        name="insights"
        options={{ headerShown: false }}
        component={MoodInsights}
      />
      <Stack.Screen
        name="options"
        options={{ headerShown: false }}
        component={MoodSelectionScreen}
      />
    </Stack.Navigator>
    
  );
};

export default MoodNavigation;
