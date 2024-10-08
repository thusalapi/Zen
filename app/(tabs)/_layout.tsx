import { Stack, Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#6B4EFF",
          tabBarInactiveTintColor: "#666",
          tabBarStyle: {
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            backgroundColor: "#FFFFFF",
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="tasks"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="cards"
          options={{
           href: null,
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="moodInsights"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="habit"
          options={{
           href: null,
          }}
        />
      </Tabs>
    </>
  );
}
