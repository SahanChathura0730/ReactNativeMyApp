import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const LoginScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <View className="bg-primary rounded-tr-[50px] justify-center p-6 pt-14">
        <Text className="text-white text-4xl font-slabBold">Welcome</Text>
      </View>
      <View className="bg-secondary justify-center p-6 ">
        <Text className="text-blue-200 text-lg">EDU Manager</Text>
      </View>

      {/* Form Section */}
      <View className="flex-1">
        <View className="bg-white p-6 rounded-2xl">
          <Text className="text-[#1E3A8A] text-lg mb-2 font-slabBold">Email</Text>
          <TextInput
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg p-3 mb-4"
          />

          <Text className="text-[#1E3A8A] text-lg mb-2 font-slabBold">Password</Text>
          <TextInput
            placeholder="Enter your password"
            secureTextEntry
            className="border border-gray-300 rounded-lg p-3 mb-4"
          />

          {/* Forgot + Sign In Button */}
          <TouchableOpacity className="bg-[#1D4ED8] py-4 rounded-xl mt-4">
            <Text className="text-white text-center font-slabBold text-lg">
              Sign In
            </Text>
          </TouchableOpacity>

          <Text className="text-center mt-4 text-gray-500">
            Forgot password? <Text className="text-[#2563EB]">Reset</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
