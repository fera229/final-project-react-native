import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {
  return (
    <SafeAreaView className="bg-customBackground h-full">
      <View className="flex-1 justify-center items-center">
        <Text className="text-customText text-2xl">Sign In</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
