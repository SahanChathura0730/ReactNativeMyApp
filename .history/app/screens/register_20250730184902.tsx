import Button from "@/components/button";
import InputField from "@/components/input";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import axios from "axios";
import React, { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/types";


type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Register">;

const RegisterScreen = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = "Full name is required";
    if (!username.trim()) newErrors.username = "Username is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters";

    if (confirmPassword !== password) newErrors.confirmPassword = "Passwords do not match";

    if (!dob) newErrors.dob = "Date of Birth is required";

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(phone)) {
      newErrors.phone = "Enter a valid phone number (10-15 digits)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };


const handleRegister = async () => {
  if (!validateForm()) return; 

  try {
    const response = await axios.post(`${process.env.API_URL}/auth/register`, {
      name,
      username,
      email,
      password,
      dob: dob?.toISOString().split("T")[0] || "",
      phone,
    });

    console.log("Registration successful:", response.data);
    alert("Registration successful!");
    navigation.replace("Home"); 
  } catch (error: any) {
    console.error("Registration failed:", error.response?.data || error.message);
    alert(error.response?.data?.message || "Registration failed, please try again.");
  }
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

          {/* Form */}
          <View className="flex bg-secondary">
            <View className="bg-white p-6 rounded-tr-[50px]">
              <Text className="pt-8 text-4xl font-slabMedium">Register</Text>

              {/* Full Name */}
              <InputField label="Full Name" placeholder="Enter your full name" value={name} onChangeText={setName} />
              {errors.name && <Text className="text-red-500 text-sm">{errors.name}</Text>}

              {/* Username */}
              <InputField label="Username" placeholder="Enter your username" value={username} onChangeText={setUsername} />
              {errors.username && <Text className="text-red-500 text-sm">{errors.username}</Text>}

              {/* Email */}
              <InputField label="Email" placeholder="Enter your email" value={email} onChangeText={setEmail} keyboardType="email-address" />
              {errors.email && <Text className="text-red-500 text-sm">{errors.email}</Text>}

              {/* Password */}
              <InputField label="Password" placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry />
              {errors.password && <Text className="text-red-500 text-sm">{errors.password}</Text>}

              {/* Confirm Password */}
              <InputField label="Confirm Password" placeholder="Re-enter your password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
              {errors.confirmPassword && <Text className="text-red-500 text-sm">{errors.confirmPassword}</Text>}

              {/* DOB */}
              <Text className="mt-4 mb-1 text-gray-700">Date of Birth</Text>
              <Text
                className="border border-gray-300 rounded-lg p-3 text-gray-600"
                onPress={() => setShowDatePicker(true)}
              >
                {dob ? dob.toDateString() : "Select your date of birth"}
              </Text>
              {errors.dob && <Text className="text-red-500 text-sm">{errors.dob}</Text>}
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

              {/* Phone */}
              <InputField
                label="Phone Number"
                placeholder="Enter your phone number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />
              {errors.phone && <Text className="text-red-500 text-sm">{errors.phone}</Text>}

              {/* Already have account? */}
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
