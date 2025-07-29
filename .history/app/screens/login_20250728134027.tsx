import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Button, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Define your navigation stack param list
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

// Define the navigation prop type
type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your backend login logic
    navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)', justifyContent: 'center', alignItems: 'center' }}>
      {/* Set dark status bar */}
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      {/* Popup Card */}
      <View style={{ width: '85%', padding: 20, borderRadius: 20, backgroundColor: 'white', elevation: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Login</Text>

        <Text>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter email"
          style={{ borderBottomWidth: 1, marginBottom: 15 }}
        />

        <Text>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          secureTextEntry
          style={{ borderBottomWidth: 1, marginBottom: 15 }}
        />

        <Button title="Login" onPress={handleLogin} />

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{ color: 'blue', marginTop: 10, textAlign: 'center' }}>
            Don't have an account? Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
