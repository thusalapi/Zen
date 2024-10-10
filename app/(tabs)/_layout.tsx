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
          name="doctors"
          options={{
            title: "Doctors",
            tabBarIcon: ({ color }) => (
              <Feather name="users" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="alldoctors"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="appointment"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="doctorDetails"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="feedback"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="habit"
          options={{
            headerShown: false,
            title: "Habit",
            tabBarIcon: ({ color }) => (
              <Feather name="plus" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
