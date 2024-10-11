import Navigator from "@/components/self-assessment/Navigator";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function SigninScreen() {
  return (
    <>
      <Navigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E0FF",
    padding: 20,
  },
});
