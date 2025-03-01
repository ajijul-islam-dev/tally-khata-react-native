import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '@tamagui/button';

const HomeScreen = () => {
  return (
    <View>
      <Text className="bg-red-500 text-white">HomeScreen</Text>
      <Button>Click Me</Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
