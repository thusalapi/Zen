// App.tsx
import React from "react";
import { SafeAreaView } from "react-native";
import HabitsPage from "./screens/HabbitPage";

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HabitsPage />
    </SafeAreaView>
  );
};

export default App;
