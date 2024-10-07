import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SignInForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Login</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          style={styles.passwordToggle}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Ionicons
            name={passwordVisible ? "eye" : "eye-off"}
            size={24}
            color="grey"
          />
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      {/* Sign Up Text */}
      <Text style={styles.signupText}>
        Don’t have an account? <Text style={styles.signupLink}>Sign up</Text>
      </Text>

      {/* Divider */}
      <View style={styles.divider}>
        <Text style={styles.dividerText}>OR</Text>
      </View>

      {/* Google Login Button */}
      <TouchableOpacity style={styles.socialButton}>
        {/* <Image
          source={require("../assets/google-logo.png")}
          style={styles.socialLogo}
        /> */}
        <Text style={styles.socialButtonText}>Log in with Google</Text>
      </TouchableOpacity>

      {/* Facebook Login Button */}
      <TouchableOpacity style={styles.socialButton}>
        {/* <Image
          source={require("../assets/facebook-logo.png")}
          style={styles.socialLogo}
        /> */}
        <Text style={styles.socialButtonText}>Log in with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E6E6FA",
  },
  backButton: {
    marginTop: 10,
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  passwordToggle: {
    position: "absolute",
    right: 10,
  },
  loginButton: {
    height: 50,
    backgroundColor: "#00BFA6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupText: {
    textAlign: "center",
    color: "#7D7D7D",
    marginBottom: 20,
  },
  signupLink: {
    color: "#00BFA6",
    fontWeight: "bold",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  dividerText: {
    fontSize: 14,
    color: "#7D7D7D",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    marginBottom: 10,
  },
  socialLogo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 16,
    color: "#000",
  },
});
