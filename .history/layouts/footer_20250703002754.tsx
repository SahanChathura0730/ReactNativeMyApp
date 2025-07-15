// components/Footer.tsx
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Footer = ({ active = "home" }) => {
  return (
    <View className="flex-row justify-around items-center bg-white border-t border-gray-200 h-120 bottom-4">
      <TouchableOpacity onPress={() => router.navigate("/")} className="items-center">
        <Ionicons name="home" size={24} color={active === "home" ? "#3B82F6" : "#6B7280"} />
        <Text className={`text-xs ${active === "home" ? "text-blue-500" : "text-gray-500"}`}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.navigate("/subjects")} className="items-center">
        <FontAwesome5 name="book" size={20} color={active === "subjects" ? "#3B82F6" : "#6B7280"} />
        <Text className={`text-xs ${active === "subjects" ? "text-blue-500" : "text-gray-500"}`}>Subjects</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.navigate("/classes")} className="items-center">
        <Ionicons name="school" size={24} color={active === "classes" ? "#3B82F6" : "#6B7280"} />
        <Text className={`text-xs ${active === "classes" ? "text-blue-500" : "text-gray-500"}`}>Classes</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.navigate("/profile")} className="items-center">
        <Ionicons name="person" size={24} color={active === "profile" ? "#3B82F6" : "#6B7280"} />
        <Text className={`text-xs ${active === "profile" ? "text-blue-500" : "text-gray-500"}`}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
