import React from "react";
import { TextInput, StyleSheet } from "react-native";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchBar({ value, onChangeText }: Props) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Search your doctor"
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#000"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: "#000",
  },
});
