// components/Footer.tsx
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Footer = () => {
  const pathname = usePathname(); 

  const isActive = (route: string) => pathname === route;

  return (
    <View className="flex-row justify-around items-center bg-white border-t border-gray-200 h-20" >
      <TouchableOpacity onPress={() => router.navigate("/")} className="items-center">
        <Ionicons name="home" size={24} color={isActive("/") ? "#3B82F6" : "#6B7280"} />
        <Text className={`text-xs ${isActive("/") ? "text-blue-500" : "text-gray-500"}`}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.navigate("/subjects")} className="items-center">
        <FontAwesome5 name="book" size={20} color={isActive("/subjects") ? "#3B82F6" : "#6B7280"} />
        <Text className={`text-xs ${isActive("/subjects") ? "text-blue-500" : "text-gray-500"}`}>Subjects</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.navigate("/classes")} className="items-center">
        <Ionicons name="school" size={24} color={isActive("/classes") ? "#3B82F6" : "#6B7280"} />
        <Text className={`text-xs ${isActive("/classes") ? "text-blue-500" : "text-gray-500"}`}>Classes</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.navigate("/profile")} className="items-center">
        <Ionicons name="person" size={24} color={isActive("/profile") ? "#3B82F6" : "#6B7280"} />
        <Text className={`text-xs ${isActive("/profile") ? "text-blue-500" : "text-gray-500"}`}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
