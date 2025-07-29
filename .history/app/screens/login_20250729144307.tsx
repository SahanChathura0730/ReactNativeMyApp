import Button from "@/components/button";
import InputField from "@/components/input";
import React from "react";
import { Image, Text, View } from "react-native";

const LoginScreen = () => {
  const handleLogin = () => {};

  return (
    <View className="flex-1 bg-white">
      {/* Header Section */}
      <View className="bg-primary rounded-tr-[50px] justify-center p-6 pt-16 pb-2">
        <Text className="text-white text-5xl font-slab">Welcome</Text>
      </View>
      <View className="bg-secondary pt-1 pl-7 pb-24">
        <Text className="text-white text-2xl font-slab">edu manager</Text>
      </View>

      {/* Circular Image */}
      <View className="absolute top-14 right-10">
        <Image
          source={{ uri: "https://via.placeholder.com/100" }}
          className="w-32 h-32 rounded-full border-2 border-accent"
        />
      </View>

      {/* Stylish Rectangle Underlay */}
      <View className="absolute bottom-0 left-0 w-full h-1/2">
        <View
          className="bg-secondary w-[110%] h-72 absolute -top-10 -left-6 rounded-tr-[60px]"
          style={{ transform: [{ rotate: "-3deg" }] }} // Tilt for style
        />
      </View>

      {/* Login Section */}
      <View className="flex flex-1 justify-end">
        <View className="bg-white p-6 rounded-tr-[50px] shadow-lg mx-4">
          <Text className="pt-4 text-4xl font-slabMedium">Login</Text>
          <View className="mt-4">
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

          <View className="flex-row justify-between">
            <Text className="text-gray-500 mt-4">Forgot password?</Text>
            <Text className="text-gray-500 mt-4">Create an account</Text>
          </View>

          <View className="mt-8">
            <Button title="Sign In" onPress={handleLogin} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
