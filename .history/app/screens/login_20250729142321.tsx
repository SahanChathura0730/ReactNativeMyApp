import InputField from "@/components/input";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const LoginScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <View className="bg-primary rounded-tr-[50px] justify-center p-6 pt-16 pb-2">
        <Text className="text-white text-5xl font-slab">Welcome</Text>
      </View>
      <View className="bg-secondary pt-1 pl-7 pb-24">
        <Text className="text-accent text-2xl font-slab">edu manager</Text>
      </View>
      <View className="absolute top-14 right-10">
        <Image source={{ uri: "https://via.placeholder.com/100" }}
        className="w-32 h-32 rounded-full border-2 border-accent"
        />
      </View>

      <View className="flex bg-secondary">
        <View className="bg-white p-6 rounded-tr-[50px]">
          <Text className="pt-12 text-4xl font-slabMedium">Login</Text>
          <View>
            <InputField
              label="Email or Username"
              placeholder="Enter your email or username"
            />
            <InputField
              label="Password"
              placeholder="Enter your password"
              secureTextEntry
            />
          </View>
          <Text className="text-center mt-4 text-gray-500">
            Forgot password?
          </Text>
                    <Text className="text-center mt-4 text-gray-500">
            Crete an account
          </Text>

          {/* Forgot + Sign In Button */}
          <TouchableOpacity className="bg-[#1D4ED8] py-4 rounded-xl mt-4">
            <Text className="text-white text-center font-slabBold text-lg">
              Sign In
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
