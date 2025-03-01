import {TamaguiProvider, createTamagui} from '@tamagui/core';
import {defaultConfig} from '@tamagui/config/v4';
import {Text} from 'react-native';
import {Button} from '@tamagui/button';
import HomeScreen from './screens/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// you usually export this from a tamagui.config.ts file
const config = createTamagui(defaultConfig);

type Conf = typeof config;

// make imports typed
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

export default () => {
  return (
    <TamaguiProvider config={config}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </TamaguiProvider>
  );
};
