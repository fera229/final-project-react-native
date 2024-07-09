import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  console.log(name, email, password);

  return (
    <View className="flex justify-center items-center p-6 bg-customBackground w-full h-full">
      <View className="w-full max-w-md">
        <TextInput
          className="h-10 border border-white mb-4 p-2 text-customText rounded-md  font-psemi-bold"
          placeholder="Name"
          placeholderTextColor="#4a7a6f"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          className="h-10 border border-white mb-4 p-2 text-customText rounded-md font-psemi-bold"
          placeholder="Email"
          placeholderTextColor="#4a7a6f"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          className="h-10 border border-white mb-4 p-2 text-customText rounded-md font-psemi-bold"
          placeholder="Password"
          placeholderTextColor="#4a7a6f"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Pressable
          className="bg-customPrimary p-4 rounded-md"
          onPress={async () => {
            const response = await fetch('/api/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name, email, password }),
            });
            const data = await response.json();
            console.log('data:', data);
          }}
        >
          <Text className="text-center text-customText">Register</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RegisterForm;
