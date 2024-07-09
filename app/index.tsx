import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView className="bg-backgroundColor w-full ">
      <ScrollView
        contentContainerStyle={{
          height: '100%',
        }}
      >
        <View className="flex items-center justify-center bg-customBackground h-full">
          <Image source={require('../assets/Diabuddy-logo.png')} />
          {/* <Text className="text-3xl color-white">Welcome to Diabuddy</Text> */}
          <StatusBar style="auto" />
          <View className="flex-row space-x-4">
            <TouchableOpacity className="bg-[#05664F] px-4 py-2 rounded-md">
              <Link href="/signIn" className="text-white text-xl">
                Sign In
              </Link>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#14EDB9] px-4 py-2 rounded-md">
              <Link href="/signUp" className="text-backgroundColor text-xl">
                Join Now
              </Link>
            </TouchableOpacity>
          </View>
          <ExpoStatusBar backgroundColor="#0D2329" style="light" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
