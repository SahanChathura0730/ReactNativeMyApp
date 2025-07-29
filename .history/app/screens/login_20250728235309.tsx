import colors from '@/constant/colour';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
   <View style={{ flex: 1, backgroundColor: 'white'}}>
    <View style={{flex: 1, backgroundColor: colors.primary , borderRadius:50,}}>
    <View style={{ padding: 20  }} className='mt-6'>
      <Text style={{fontSize:50}}>EDU</Text>
      <Text>App</Text>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} placeholder="Enter email" style={{ borderBottomWidth: 1 }} />

      <Text>Password</Text>
      <TextInput value={password} onChangeText={setPassword} placeholder="Enter password" secureTextEntry style={{ borderBottomWidth: 1 }} />

      <Button title="Login" onPress={handleLogin} />

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={{ color: 'blue', marginTop: 10 }}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
    </View>
    </View>
  );
};

export default Login;
