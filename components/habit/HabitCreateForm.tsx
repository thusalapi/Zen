import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Calendar } from "react-native-calendars";

const HabitCreationForm: React.FC = () => {
  const [habitType, setHabitType] = useState("Regular habit");
  const [habitName, setHabitName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("");
  const [frequency, setFrequency] = useState("Daily");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeOfDay, setTimeOfDay] = useState("Morning");
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [dateType, setDateType] = useState("Date");

  const icons = [
    "moon",
    "water",
    "run",
    "meditation",
    "food-apple",
    "check-circle",
  ];
  const iconColors = [
    "#FF9999",
    "#99FF99",
    "#99FFFF",
    "#FFFF99",
    "#9999FF",
    "#FF99FF",
  ];
  const frequencies = ["Daily", "Weekly", "Monthly"];
  const timesOfDay = ["Morning", "Afternoon", "Evening"];
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  const toggleDay = (day: number) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.habitTypeContainer}>
          {["Regular habit", "Irregular habit"].map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.habitTypeButton,
                habitType === type && styles.activeHabitTypeButton,
              ]}
              onPress={() => setHabitType(type)}
            >
              <Text
                style={[
                  styles.habitTypeText,
                  habitType === type && styles.activeHabitTypeText,
                ]}
              >
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TextInput
          style={styles.input}
          placeholder="Study Art"
          value={habitName}
          onChangeText={setHabitName}
        />

        <View style={styles.iconContainer}>
          {icons.map((icon, index) => (
            <TouchableOpacity
              key={icon}
              style={[
                styles.iconButton,
                { backgroundColor: iconColors[index] },
              ]}
              onPress={() => setSelectedIcon(icon)}
            >
              <Icon name={icon} size={24} color="#fff" />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.frequencyContainer}>
          {frequencies.map((freq) => (
            <TouchableOpacity
              key={freq}
              style={[
                styles.frequencyButton,
                frequency === freq && styles.activeFrequencyButton,
              ]}
              onPress={() => setFrequency(freq)}
            >
              <Text
                style={[
                  styles.frequencyText,
                  frequency === freq && styles.activeFrequencyText,
                ]}
              >
                {freq}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {frequency === "Daily" && (
          <View style={styles.calendarContainer}>
            <Calendar
              onDayPress={(day:any) => {
                setSelectedDate(new Date(day.dateString));
              }}
              markedDates={{
                [selectedDate.toISOString().split("T")[0]]: {
                  selected: true,
                  selectedColor: "#9370DB",
                },
              }}
              theme={{
                backgroundColor: "#ffffff",
                calendarBackground: "#ffffff",
                textSectionTitleColor: "#b6c1cd",
                selectedDayBackgroundColor: "#9370DB",
                selectedDayTextColor: "#ffffff",
                todayTextColor: "#9370DB",
                dayTextColor: "#2d4150",
                textDisabledColor: "#d9e1e8",
                dotColor: "#00adf5",
                selectedDotColor: "#ffffff",
                arrowColor: "#9370DB",
                monthTextColor: "#9370DB",
                indicatorColor: "#9370DB",
                textDayFontWeight: "300",
                textMonthFontWeight: "bold",
                textDayHeaderFontWeight: "300",
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16,
              }}
            />
          </View>
        )}

        {frequency === "Weekly" && (
          <View style={styles.weeklyContainer}>
            <Text style={styles.weeklyTitle}>5 days per week</Text>
            <View style={styles.daysContainer}>
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <TouchableOpacity
                  key={day}
                  style={[
                    styles.dayButton,
                    selectedDays.includes(day) && styles.activeDayButton,
                  ]}
                  onPress={() => toggleDay(day)}
                >
                  <Text
                    style={[
                      styles.dayText,
                      selectedDays.includes(day) && styles.activeDayText,
                    ]}
                  >
                    {day}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {frequency === "Monthly" && (
          <View style={styles.monthlyContainer}>
            <Text style={styles.monthlyTitle}>On these days</Text>
            <View style={styles.daysContainer}>
              {daysOfWeek.map((day, index) => (
                <TouchableOpacity
                  key={day}
                  style={[
                    styles.dayButton,
                    selectedDays.includes(index) && styles.activeDayButton,
                  ]}
                  onPress={() => toggleDay(index)}
                >
                  <Text
                    style={[
                      styles.dayText,
                      selectedDays.includes(index) && styles.activeDayText,
                    ]}
                  >
                    {day}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        <View style={styles.timeOfDayContainer}>
          {timesOfDay.map((time) => (
            <TouchableOpacity
              key={time}
              style={[
                styles.timeOfDayButton,
                timeOfDay === time && styles.activeTimeOfDayButton,
              ]}
              onPress={() => setTimeOfDay(time)}
            >
              <Text
                style={[
                  styles.timeOfDayText,
                  timeOfDay === time && styles.activeTimeOfDayText,
                ]}
              >
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Enable notifications</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() =>
              setIsEnabled((previousState) => !previousState)
            }
            value={isEnabled}
          />
        </View>

        {frequency !== "Daily" && (
          <View style={styles.dateContainer}>
            <View style={styles.dateTypeContainer}>
              <TouchableOpacity
                style={[
                  styles.dateTypeButton,
                  dateType === "Date" && styles.activeDateTypeButton,
                ]}
                onPress={() => setDateType("Date")}
              >
                <Text
                  style={[
                    styles.dateTypeText,
                    dateType === "Date" && styles.activeDateTypeText,
                  ]}
                >
                  Date
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.dateTypeButton,
                  dateType === "Days" && styles.activeDateTypeButton,
                ]}
                onPress={() => setDateType("Days")}
              >
                <Text
                  style={[
                    styles.dateTypeText,
                    dateType === "Days" && styles.activeDateTypeText,
                  ]}
                >
                  Days
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.datePickerButton}>
              <Icon name="calendar" size={24} color="#000" />
              <Text style={styles.datePickerText}>
                {dateType === "Date" ? "December 31, 2025" : "After 20 days"}
              </Text>
              <Icon
                name="pencil"
                size={24}
                color="#000"
                style={styles.editIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.datePickerButton}>
              <Icon name="clock-outline" size={24} color="#000" />
              <Text style={styles.datePickerText}>20:00 PM</Text>
              <Icon
                name="pencil"
                size={24}
                color="#000"
                style={styles.editIcon}
              />
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    padding: 20,
  },
  habitTypeContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  habitTypeButton: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    backgroundColor: "#E6E6FA",
    borderRadius: 10,
    marginHorizontal: 5,
  },
  activeHabitTypeButton: {
    backgroundColor: "#9370DB",
  },
  habitTypeText: {
    color: "#000",
    fontWeight: "bold",
  },
  activeHabitTypeText: {
    color: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  iconButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  frequencyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  frequencyButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#E6E6FA",
  },
  activeFrequencyButton: {
    backgroundColor: "#9370DB",
  },
  frequencyText: {
    color: "#000",
  },
  activeFrequencyText: {
    color: "#fff",
  },
  calendarContainer: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  weeklyContainer: {
    marginBottom: 20,
  },
  weeklyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  monthlyContainer: {
    marginBottom: 20,
  },
  monthlyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  dayButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E6E6FA",
    justifyContent: "center",
    alignItems: "center",
  },
  activeDayButton: {
    backgroundColor: "#9370DB",
  },
  dayText: {
    color: "#000",
  },
  activeDayText: {
    color: "#fff",
  },
  timeOfDayContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  timeOfDayButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#E6E6FA",
  },
  activeTimeOfDayButton: {
    backgroundColor: "#9370DB",
  },
  timeOfDayText: {
    color: "#000",
  },
  activeTimeOfDayText: {
    color: "#fff",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  switchText: {
    fontSize: 16,
    color: "#000",
  },
  dateContainer: {
    marginBottom: 20,
  },
  dateTypeContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  dateTypeButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#E6E6FA",
    borderRadius: 10,
    marginHorizontal: 5,
  },
  activeDateTypeButton: {
    backgroundColor: "#9370DB",
  },
  dateTypeText: {
    color: "#000",
  },
  activeDateTypeText: {
    color: "#fff",
  },
  datePickerButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  datePickerText: {
    flex: 1,
    marginLeft: 10,
    color: "#000",
  },
  editIcon: {
    marginLeft: 10,
  },
  saveButton: {
    backgroundColor: "#9370DB",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default HabitCreationForm;
