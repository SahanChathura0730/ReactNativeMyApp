import Button from "@/components/button";
import InputField from "@/components/input";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from "axios";
import React, { useState } from "react";
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/types";

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!usernameOrEmail.trim()) {
      newErrors.usernameOrEmail = "Email or Username is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/auth/login`, {
        usernameOrEmail,
        password,
      });

      console.log("Login successful:", response.data);
      Alert.alert("Success", "Login successful!");
      navigation.replace("Home");
    } catch (error: any) {
      console.error("Login failed:", error.response?.data || error.message);
      Alert.alert("Login Failed", error.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View className="flex-1 bg-white">
          {/* Header */}
          <View className="bg-primary rounded-tr-[50px] justify-center p-6 pt-16 pb-2">
            <Text className="text-white text-5xl font-slab">Welcome</Text>
          </View>
          <View className="bg-secondary pt-1 pl-7 pb-24">
            <Text className="text-white text-2xl font-slab">edu manager</Text>
          </View>
          <View className="absolute top-14 right-10">
            <Image
              source={require("../../assets/images/Smith_College_Hood.jpg")}
              className="w-32 h-32 rounded-full border-2 border-accent"
            />
          </View>

          {/* Form */}
          <View className="flex bg-secondary">
            <View className="bg-white p-6 rounded-tr-[50px]">
              <Text className="pt-12 text-4xl font-slabMedium">Login</Text>

              {/* Email/Username */}
              <InputField
                label="Email or Username"
                placeholder="Enter your email or username"
                value={usernameOrEmail}
                onChangeText={setUsernameOrEmail}
              />
              {errors.usernameOrEmail && <Text className="text-red-500 text-sm">{errors.usernameOrEmail}</Text>}

              {/* Password */}
              <InputField
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              {errors.password && <Text className="text-red-500 text-sm">{errors.password}</Text>}

              {/* Forgot / Create */}
              <View className="flex-row justify-between">
                <Text
                  className="text-center mt-4 text-gray-500"
                  onPress={() => navigation.navigate('ForgotPassword')}
                >
                  Forgot password?
                </Text>
                <Text
                  className="text-center mt-4 text-gray-500"
                  onPress={() => navigation.navigate('Register')}
                >
                  Create an account
                </Text>
              </View>

              {/* Login Button */}
              <View className="m-8">
                <Button title="Sign In" onPress={handleLogin} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
