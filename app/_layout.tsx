import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Define your custom light theme
const CustomLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#00BFA6", // Example color for primary buttons or highlights
    background: "#FFFFFF", // Light background color
    text: "#000000", // Dark text color for readability
    card: "#F4F6F9", // Light color for cards or app bar
    border: "#E5E5E5", // Border color for any containers
    notification: "#00BFA6", // Notification color
  },
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider
      value={colorScheme === "dark" ? DarkTheme : CustomLightTheme} // Use custom light theme
    >
      <Stack
        screenOptions={{
          headerShown: false,
          headerStyle: {},
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="all-doctors" options={{ title: "All Doctors" }} />
        <Stack.Screen
          name="doctor-details/[id]"
          options={{ title: "Doctor Details" }}
        />
        <Stack.Screen
          name="appointment/[id]"
          options={{ title: "Book Appointment" }}
        />
        <Stack.Screen name="feedback" options={{ title: "Feedback" }} />
      </Stack>
    </ThemeProvider>
  );
}
