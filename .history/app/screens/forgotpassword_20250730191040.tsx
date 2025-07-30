import Button from "@/components/button";
import InputField from "@/components/input";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/_types"; // ✅ Import types

type ForgotPasswordNavigationProp = NativeStackNavigationProp<RootStackParamList, "ForgotPassword">;

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<ForgotPasswordNavigationProp>();

  const handleReset = () => {
    console.log("Password reset link sent");
    // After sending, navigate back to login or show a confirmation screen
    navigation.goBack(); // ✅ Go back to Login
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View className="flex-1 bg-white">
          <View className="bg-primary rounded-tr-[50px] justify-center p-6 pt-16 pb-2">
            <Text className="text-white text-5xl font-slab">Reset Password</Text>
          </View>
          <View className="bg-secondary pt-1 pl-7 pb-20">
            <Text className="text-white text-2xl font-slab">edu manager</Text>
          </View>
          <View className="absolute top-14 right-10">
            <Image
              source={require("../../assets/images/Smith_College_Hood.jpg")}
              className="w-32 h-32 rounded-full border-2 border-accent"
            />
          </View>

          <View className="flex bg-secondary">
            <View className="bg-white p-6 rounded-tr-[50px]">
              <Text className="pt-8 text-4xl font-slabMedium">Forgot Password</Text>
              <Text className="text-gray-500 mt-2 mb-4">
                Enter your email to receive a password reset link.
              </Text>

              <InputField label="Email" placeholder="Enter your email" />
              <Text className="text-left mt-4 text-gray-500">
                Back to{" "}
                <Text className="text-primary" onPress={() => navigation.goBack()}>
                  Login
                </Text>
              </Text>

              <View className="mt-8">
                <Button title="Send Reset Link" onPress={handleReset} />
              </View>

            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;
