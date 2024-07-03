import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-customColor">
      <Image source={require('../assets/Diabuddy-logo.png')} />
      {/* <Text className="text-3xl color-white">Welcome to Diabuddy</Text> */}
      <StatusBar style="auto" />
      <View className="flex-row space-x-4">
        <TouchableOpacity className="bg-[#05664F] px-4 py-2 rounded-md">
          <Link href={'/signIn'} className="text-white text-xl">
            Sign In
          </Link>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#14EDB9] px-4 py-2 rounded-md">
          <Link href={'/signUp'} className="text-white text-xl">
            Join Now
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}
