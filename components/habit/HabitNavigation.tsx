import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HabitsAndGoalsScreen from "./HabitsAndGoalsScreen";
import CreateNewHabitForm from "./CreateNewHabitForm";
import RemindersScreen from "./ReminderScreen";

const Stack = createNativeStackNavigator();

const HabitNavigation = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{headerShown: false}} component={HabitsAndGoalsScreen} />
        <Stack.Screen name="habitform" component={CreateNewHabitForm} />
        <Stack.Screen name="reminder" component={RemindersScreen} />
      </Stack.Navigator>
  );
};

export default HabitNavigation;
