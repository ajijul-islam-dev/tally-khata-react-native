import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '@tamagui/button';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 justify-center items-center">
      <Text>LoginScreen</Text>
      <Button onPress={() => navigation.goBack()}>Go Home</Button>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
