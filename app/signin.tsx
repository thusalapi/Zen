import React from "react";
import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import SigninForm from "@/components/SignInForm";

export default function SigninScreen() {
  return (
    <View style={styles.container}>
      <SigninForm onNavigateBack={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E0FF",
    padding: 20,
  },
});
