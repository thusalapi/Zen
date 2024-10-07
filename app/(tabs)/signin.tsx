import SignInForm from "@/components/SignInForm";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      {/* <Image source={require("../../assets/logo.png")} style={styles.logo} /> */}
      {/* <Text style={styles.title}>Welcome Back</Text> */}
      <SignInForm
        onSignIn={function (email: string, password: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6FA",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 28,
    color: "#000000",
    marginTop: 100,
    fontWeight: "bold",
  },
});
