import React from "react";
import { View } from "react-native";
import MoodInsights from "../components/MoodInsights";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <MoodInsights
        name="Rivin"
        moodText="sad"
        moodPercentage={67}
        journalLogs={26}
        hoursSpent={300}
        helpMessage="Your mood was all over the place this month!"
      />
    </View>
  );
};

export default App;
