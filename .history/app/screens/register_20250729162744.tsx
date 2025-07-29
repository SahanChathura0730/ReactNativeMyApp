import Button from "@/components/button";
import InputField from "@/components/input";
import React from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";

const RegisterScreen = () => {
  const handleRegister = () => {
    console.log("Register clicked");
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View className="flex-1 bg-white">
          <View className="bg-primary rounded-tr-[50px] justify-center p-6 pt-16 pb-2">
            <Text className="text-white text-5xl font-slab">Create Account</Text>
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
              <Text className="pt-8 text-4xl font-slabMedium">Register</Text>

              <View>
                <InputField label="Full Name" placeholder="Enter your full name" />
                <InputField label="Email" placeholder="Enter your email" />
                <InputField label="Password" placeholder="Enter your password" secureTextEntry />
                <InputField label="Confirm Password" placeholder="Re-enter your password" secureTextEntry />
              </View>

              <View className="mt-8">
                <Button title="Sign Up" onPress={handleRegister} />
              </View>

              <Text className="text-center mt-4 text-gray-500">
                Already have an account? <Text className="text-primary">Login</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
