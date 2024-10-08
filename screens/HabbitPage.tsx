// HabitsPage.tsx
import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import HabitProgress from "../components/habit/HabitProgress";

interface Habit {
  id: number;
  title: string;
  progress: number; // Progress as percentage
}

const HabitsPage: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await fetch("http://your-backend-url/api/habits");
        const data: Habit[] = await response.json();
        setHabits(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHabits();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {habits.map((habit) => (
        <HabitProgress
          key={habit.id}
          title={habit.title}
          progress={habit.progress}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
});

export default HabitsPage;
