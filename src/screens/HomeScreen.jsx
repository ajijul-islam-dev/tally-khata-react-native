import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '@tamagui/button';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="bg-red-500 text-white">HomeScreen</Text>
      <Button onPress={() => navigation.navigate('LoginScreen')}>Login</Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
