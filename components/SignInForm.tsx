import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";

interface SigninFormProps {
  onNavigateBack?: () => void;
}

const SigninForm: React.FC<SigninFormProps> = ({ onNavigateBack }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleEmailChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    setEmail(e.nativeEvent.text);
  };

  const handlePasswordChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    setPassword(e.nativeEvent.text);
  };

  const handleSignin = (): void => {
    // Implement signin logic here
    console.log("Signing in with:", email, password);
  };

  const handleSocialSignin = (provider: "google" | "facebook"): void => {
    // console.log(Signing in with ${provider});
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity style={styles.backButton} onPress={onNavigateBack}>
        <Feather name="arrow-left" size={24} color="black" />
      </TouchableOpacity> */}

      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChange={handleEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.signinButton}
          onPress={() => router.push("/(tabs)/assement")}
        >
          <Text style={styles.signinButtonText}>Log in</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/(tabs)/")}>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.orContainer}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orLine} />
        </View>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleSocialSignin("google")}
        >
          <Image
            source={{ uri: "https://www.google.com/favicon.ico" }}
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Log in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleSocialSignin("facebook")}
        >
          <View style={styles.facebookIconContainer}>
            <Text style={styles.facebookIcon}>f</Text>
          </View>
          <Text style={styles.socialButtonText}>Log in with Facebook</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F4F2",
    padding: 20,
  },
  backButton: {
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 15,
  },
  signinButton: {
    backgroundColor: "#D2B48C",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  signinButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 20,
  },
  signupText: {
    color: "#666",
  },
  signupLink: {
    color: "#6C5CE7",
    fontWeight: "600",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#666",
    opacity: 0.2,
  },
  orText: {
    marginHorizontal: 10,
    color: "#666",
    fontSize: 16,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  facebookIconContainer: {
    width: 20,
    height: 20,
    backgroundColor: "#1877F2",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  facebookIcon: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  socialButtonText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
});

export default SigninForm;
