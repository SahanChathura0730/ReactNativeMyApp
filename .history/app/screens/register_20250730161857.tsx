import Button from "@/components/button";
import InputField from "@/components/input";
import DateTimePicker from "@react-native-community/datetimepicker"; // ✅ For DOB picker
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/types";

type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Register">;

const RegisterScreen = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  // ✅ State for form fields
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [phone, setPhone] = useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log({ name, username, email, password, dob, phone });
    navigation.replace("Home"); // Navigate to Home after successful registration
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View className="flex-1 bg-white">
          {/* Header */}
          <View className="bg-primary rounded-tr-[50px] justify-center p-6 pt-16 pb-2">
            <Text className="text-white text-5xl font-slab">Welcome</Text>
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

          {/* Form Section */}
          <View className="flex bg-secondary">
            <View className="bg-white p-6 rounded-tr-[50px]">
              <Text className="pt-8 text-4xl font-slabMedium">Register</Text>

              <View>
                <InputField label="Full Name" placeholder="Enter your full name" value={name} onChangeText={setName} />
                <InputField label="Username" placeholder="Enter your username" value={username} onChangeText={setUsername} />
                <InputField label="Email" placeholder="Enter your email" value={email} onChangeText={setEmail} keyboardType="email-address" />
                <InputField label="Password" placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry />
                <InputField label="Confirm Password" placeholder="Re-enter your password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
                
                {/* ✅ Date of Birth Picker */}
                <Text className="mt-4 mb-1 text-gray-700">Date of Birth</Text>
                <Text
                  className="border border-gray-300 rounded-lg p-3 text-gray-600"
                  onPress={() => setShowDatePicker(true)}
                >
                  {dob ? dob.toDateString() : "Select your date of birth"}
                </Text>
                {showDatePicker && (
                  <DateTimePicker
                    value={dob || new Date()}
                    mode="date"
                    display="default"
                    onChange={(event, selectedDate) => {
                      setShowDatePicker(false);
                      if (selectedDate) setDob(selectedDate);
                    }}
                  />
                )}

                {/* ✅ Phone Number */}
                <InputField
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                />
              </View>

              {/* Already have an account? */}
              <Text className="text-left mt-4 text-gray-500">
                Already have an account?{" "}
                <Text className="text-primary" onPress={() => navigation.goBack()}>
                  Login
                </Text>
              </Text>

              {/* Submit Button */}
              <View className="mt-8">
                <Button title="Sign Up" onPress={handleRegister} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
