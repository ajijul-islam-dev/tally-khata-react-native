import {TamaguiProvider, createTamagui} from '@tamagui/core';
import {defaultConfig} from '@tamagui/config/v4';
import {Text} from 'react-native';
import {Button} from '@tamagui/button';
import HomeScreen from './screens/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';

// you usually export this from a tamagui.config.ts file
const config = createTamagui(defaultConfig);

type Conf = typeof config;

// make imports typed
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

export default () => {
  const Stack = createNativeStackNavigator();
  return (
    <TamaguiProvider config={config}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: true}}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{headerShown: true, title: 'Login'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
};
