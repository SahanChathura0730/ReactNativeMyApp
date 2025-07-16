import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'Sahan Chathura',
    email: 'sahan@example.com',
    phone: '077-1234567',
    university: 'University of Moratuwa',
  });

  const handleEditToggle = () => setEditing(!editing);

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="items-center pt-10 px-6">
        {/* Profile Picture */}
        <Image
          source={require('../assets/images/react-logo.png')}
          style={{ width: 120, height: 120, borderRadius: 60 }}
        />

        {/* Edit Button */}
        <TouchableOpacity
          className="mt-3 flex-row items-center"
          onPress={handleEditToggle}
        >
          <Ionicons name="create-outline" size={18} color="#4B5563" />
          <Text className="ml-1 text-gray-700">{editing ? 'Cancel' : 'Edit Profile'}</Text>
        </TouchableOpacity>

        {/* User Info */}
        <View className="w-full mt-8 space-y-5">
          {/* Name */}
          <Text className="text-sm text-gray-500">Full Name</Text>
          {editing ? (
            <TextInput
              className="border border-gray-300 rounded-md px-4 py-2 bg-white"
              value={user.name}
              onChangeText={(text) => setUser({ ...user, name: text })}
            />
          ) : (
            <Text className="text-lg font-semibold text-gray-800">{user.name}</Text>
          )}

          {/* Email */}
          <Text className="text-sm text-gray-500 mt-4">Email</Text>
          {editing ? (
            <TextInput
              className="border border-gray-300 rounded-md px-4 py-2 bg-white"
              value={user.email}
              onChangeText={(text) => setUser({ ...user, email: text })}
              keyboardType="email-address"
            />
          ) : (
            <Text className="text-lg font-semibold text-gray-800">{user.email}</Text>
          )}

          {/* Phone */}
          <Text className="text-sm text-gray-500 mt-4">Phone</Text>
          {editing ? (
            <TextInput
              className="border border-gray-300 rounded-md px-4 py-2 bg-white"
              value={user.phone}
              onChangeText={(text) => setUser({ ...user, phone: text })}
              keyboardType="phone-pad"
            />
          ) : (
            <Text className="text-lg font-semibold text-gray-800">{user.phone}</Text>
          )}

          {/* University */}
          <Text className="text-sm text-gray-500 mt-4">University</Text>
          {editing ? (
            <TextInput
              className="border border-gray-300 rounded-md px-4 py-2 bg-white"
              value={user.university}
              onChangeText={(text) => setUser({ ...user, university: text })}
            />
          ) : (
            <Text className="text-lg font-semibold text-gray-800">{user.university}</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
