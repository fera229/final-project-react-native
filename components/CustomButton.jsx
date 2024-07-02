import { title } from 'process';
import React from 'react';
import { Text, View } from 'react-native';

const CustomButton = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default CustomButton;
