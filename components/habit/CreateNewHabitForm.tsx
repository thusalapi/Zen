import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Calendar } from "react-native-calendars";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

const CreateNewHabitForm = () => {
  const [habitName, setHabitName] = useState("Study Art");
  const [selectedIcon, setSelectedIcon] = useState("moon");
  const [repeatType, setRepeatType] = useState("Daily");
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [timeOfDay, setTimeOfDay] = useState("Evening");
  const [endHabit, setEndHabit] = useState(false);
  const [endDateType, setEndDateType] = useState("Date");
  const [endDate, setEndDate] = useState("");
  const [reminder, setReminder] = useState(false);
  const [reminderTime, setReminderTime] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [habitType, setHabitType] = useState("Regular"); // Added state for habit type
  const [dateRange, setDateRange] = useState({
    start: "",
    end: "",
  }); // Added state for date range

  const icons = ["moon", "tint", "align-center", "user", "running"];
  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

  const toggleDay = (day: any) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);
  const handleConfirmDate = (date: any) => {
    setEndDate(date.toDateString());
    hideDatePicker();
  };

  const showTimePicker = () => setTimePickerVisibility(true);
  const hideTimePicker = () => setTimePickerVisibility(false);
  const handleConfirmTime = (time: any) => {
    setReminderTime(
      time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
    hideTimePicker();
  };

  const handleDayPress = (day: any) => {
    if (!dateRange.start) {
      setDateRange({ start: day.dateString, end: "" });
    } else if (!dateRange.end) {
      setDateRange((prev) => ({ ...prev, end: day.dateString }));
    } else {
      setDateRange({ start: day.dateString, end: "" });
    }
  };

  // Assuming handleSubmit already collects formData including userId
  const handleSubmit = async () => {
    const formData = {
      habitName,
      selectedIcon,
      repeatType,
      selectedDays,
      timeOfDay,
      endHabit,
      endDateType,
      endDate,
      reminder,
      reminderTime,
      habitType,
      dateRange,
      userId: "USER_ID", // Replace with actual user ID from your app's auth system
    };

    try {
      const response = await axios.post(
        "http://<your-server-url>/api/habits",
        formData
      );
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error("Error submitting habit form:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Create New Habit</Text>
          <TouchableOpacity>
            <Icon name="bell-o" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.habitTypeContainer}>
          <TouchableOpacity
            style={[
              styles.habitTypeButton,
              habitType === "Regular" && styles.selectedHabitType,
            ]}
            onPress={() => setHabitType("Regular")}
          >
            <Text style={styles.habitTypeText}>Regular habit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.habitTypeButton,
              habitType === "Irregular" && styles.selectedHabitType,
            ]}
            onPress={() => setHabitType("Irregular")}
          >
            <Text style={styles.habitTypeText}>Irregular habit</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Habit name</Text>
        <TextInput
          style={styles.input}
          value={habitName}
          onChangeText={setHabitName}
          placeholder="Enter habit name"
        />

        <Text style={styles.label}>Icon</Text>
        <View style={styles.iconContainer}>
          {icons.map((icon, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedIcon(icon)}
              style={[
                styles.iconButton,
                selectedIcon === icon && styles.selectedIcon,
              ]}
            >
              <Icon
                name={icon}
                size={24}
                color={selectedIcon === icon ? "#3498db" : "black"}
              />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Repeat</Text>
        <View style={styles.repeatContainer}>
          {["Daily", "Weekly", "Monthly"].map((type) => (
            <TouchableOpacity
              key={type}
              onPress={() => setRepeatType(type)}
              style={[
                styles.repeatButton,
                repeatType === type && styles.selectedRepeat,
              ]}
            >
              <Text
                style={
                  repeatType === type
                    ? styles.selectedRepeatText
                    : styles.repeatText
                }
              >
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {repeatType === "Daily" && (
          <Calendar
            style={styles.calendar}
            onDayPress={handleDayPress} // Added onDayPress to capture date
            theme={{
              backgroundColor: "#ffffff",
              calendarBackground: "#ffffff",
              textSectionTitleColor: "#b6c1cd",
              selectedDayBackgroundColor: "#3498db",
              selectedDayTextColor: "#ffffff",
              todayTextColor: "#3498db",
              dayTextColor: "#2d4150",
              textDisabledColor: "#d9e1e8",
            }}
            markedDates={{
              [dateRange.start]: {
                selected: true,
                startingDay: true,
                color: "#3498db",
                textColor: "white",
              },
              [dateRange.end]: {
                selected: true,
                endingDay: true,
                color: "#3498db",
                textColor: "white",
              },
            }}
            markingType="period"
          />
        )}

        {repeatType === "Weekly" && (
          <View>
            <Text style={styles.subLabel}>5 days per week</Text>
            <View style={styles.weekDaysContainer}>
              {["1", "2", "3", "4", "5", "6", "7"].map((day, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => toggleDay(day)}
                  style={[
                    styles.dayButton,
                    selectedDays.includes(day) && styles.selectedDay,
                  ]}
                >
                  <Text
                    style={
                      selectedDays.includes(day)
                        ? styles.selectedDayText
                        : styles.dayText
                    }
                  >
                    {day}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {repeatType === "Monthly" && (
          <View>
            <Text style={styles.subLabel}>On these days</Text>
            <View style={styles.weekDaysContainer}>
              {weekDays.map((day, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => toggleDay(day)}
                  style={[
                    styles.dayButton,
                    selectedDays.includes(day) && styles.selectedDay,
                  ]}
                >
                  <Text
                    style={
                      selectedDays.includes(day)
                        ? styles.selectedDayText
                        : styles.dayText
                    }
                  >
                    {day}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        <Text style={styles.label}>Do it at</Text>
        <View style={styles.timeOfDayContainer}>
          {["Morning", "Afternoon", "Evening"].map((time) => (
            <TouchableOpacity
              key={time}
              onPress={() => setTimeOfDay(time)}
              style={[
                styles.timeButton,
                timeOfDay === time && styles.selectedTime,
              ]}
            >
              <Text
                style={
                  timeOfDay === time ? styles.selectedTimeText : styles.timeText
                }
              >
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>End Habit</Text>
          <Switch
            value={endHabit}
            onValueChange={setEndHabit}
            trackColor={{ false: "#767577", true: "#C4A484" }}
            thumbColor={endHabit ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>

        {endHabit && (
          <View>
            <View style={styles.dateContainer}>
              <TouchableOpacity
                style={[
                  styles.dateButton,
                  endDateType === "Date" && styles.selectedDateButton,
                ]}
                onPress={() => setEndDateType("Date")}
              >
                <Text style={styles.dateButtonText}>Date</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.dateButton,
                  endDateType === "Days" && styles.selectedDateButton,
                ]}
                onPress={() => setEndDateType("Days")}
              >
                <Text style={styles.dateButtonText}>Days</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.dateTimeButton}
              onPress={showDatePicker}
            >
              <Icon name="calendar" size={20} color="gray" />
              <Text style={styles.dateTimeText}>
                {endDate || "Select end date"}
              </Text>
              <Icon name="pencil" size={20} color="gray" />
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Set reminder</Text>
          <Switch
            value={reminder}
            onValueChange={setReminder}
            trackColor={{ false: "#767577", true: "#C4A484" }}
            thumbColor={reminder ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>

        {reminder && (
          <TouchableOpacity
            style={styles.dateTimeButton}
            onPress={showTimePicker}
          >
            <Icon name="clock-o" size={20} color="gray" />
            <Text style={styles.dateTimeText}>
              {reminderTime || "Select reminder time"}
            </Text>
            <Icon name="pencil" size={20} color="gray" />
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={hideDatePicker}
        />

        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleConfirmTime}
          onCancel={hideTimePicker}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContent: {
    padding: 20,
  },
  selectedHabitType: {
    backgroundColor: "#8B4513", // Change color when selected
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  habitTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  habitTypeButton: {
    backgroundColor: "#C4A484",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  habitTypeText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#F0F0F0",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  iconButton: {
    padding: 15,
    borderRadius: 50,
    backgroundColor: "#F0F0F0",
  },
  selectedIcon: {
    backgroundColor: "#E0F0FF",
  },
  repeatContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  repeatButton: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#3498db",
  },
  selectedRepeat: {
    backgroundColor: "#C4A484",
    borderColor: "#C4A484",
  },
  repeatText: {
    color: "#3498db",
  },
  selectedRepeatText: {
    color: "white",
  },
  calendar: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    marginBottom: 20,
  },
  subLabel: {
    fontSize: 14,
    marginBottom: 10,
  },
  weekDaysContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  dayButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  selectedDay: {
    backgroundColor: "#C4A484",
    borderColor: "#C4A484",
  },
  dayText: {
    color: "black",
  },
  selectedDayText: {
    color: "white",
  },
  timeOfDayContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  timeButton: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#3498db",
  },
  selectedTime: {
    backgroundColor: "#C4A484",
    borderColor: "#C4A484",
  },
  timeText: {
    color: "#3498db",
  },
  selectedTimeText: {
    color: "white",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  dateButton: {
    backgroundColor: "#F0F0F0",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  selectedDateButton: {
    backgroundColor: "#C4A484",
  },
  dateButtonText: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
  dateTimeButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  dateTimeText: {
    flex: 1,
    marginLeft: 10,
  },
  saveButton: {
    backgroundColor: "#C4A484",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CreateNewHabitForm;
