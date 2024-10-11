import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#666",
          tabBarStyle: {
            backgroundColor: "#BC9680",
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: "",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <Feather name="book" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="doctors"
          options={{
            tabBarLabel: "",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Feather name="users" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="habit"
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <Feather name="target" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
