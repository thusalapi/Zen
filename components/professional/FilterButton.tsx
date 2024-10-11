import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  isActive?: boolean;
  onPress: () => void;
};

export default function FilterButton({
  title,
  isActive = false,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, isActive && styles.activeButton]}
      onPress={onPress}
    >
      <Text style={[styles.text, isActive && styles.activeText]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#D2B48C",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  activeButton: {
    backgroundColor: "#8B4513",
  },
  text: {
    color: "#000",
    fontWeight: "500",
  },
  activeText: {
    color: "#FFF",
  },
});
