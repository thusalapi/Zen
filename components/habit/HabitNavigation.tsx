import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HabitsAndGoalsScreen from "./HabitsAndGoalsScreen";
import CreateNewHabitForm from "./CreateNewHabitForm";
import RemindersScreen from "./ReminderScreen";
import AllHabitsScreen from "./AllHabitsScreen";

const Stack = createNativeStackNavigator();

const HabitNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HabitsAndGoalsScreen}
      />
      <Stack.Screen
        name="habitform"
        options={{ headerShown: false }}
        component={CreateNewHabitForm}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="reminder"
        component={RemindersScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="allhabit"
        component={AllHabitsScreen}
      />
    </Stack.Navigator>
  );
};

export default HabitNavigation;
