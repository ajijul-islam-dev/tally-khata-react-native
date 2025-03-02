import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Button} from '@tamagui/button';
import {useNavigation} from '@react-navigation/native';
import ImageSlider from '@coder-shubh/react-native-image-slider';
import {Input} from '@tamagui/input';

const LoginScreen = () => {
  const [isSlideVisible, setIsSlideVisible] = useState(true);
  const navigation = useNavigation();
  const images = new Array(3).fill(
    'https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_640.jpg',
  );
  return (
    <KeyboardAvoidingView className="flex-1 justify-start">
      {isSlideVisible && (
        <View className="flex-row justify-start items-start border-b border-gray-300 pb-2">
          <ImageSlider
            className="border"
            images={images}
            imageHeight={280}
            dotSize={10}
            dotColor="silver"
            activeDotColor="blue"
            showNavigationButtons={false}
            showIndicatorDots={true}
            imageLabel={false}
            label="Example Label"
            extrapolate="clamp"
            autoSlideInterval={5000}
            containerStyle={{marginBottom: 5}}
            radius={0}
          />
        </View>
      )}
      <Pressable
        onPress={() => setIsSlideVisible(true)}
        className="w-[95%] my-20 mx-auto">
        <Text className="text-2xl">Login/Register</Text>
        <Input
          onPress={() => setIsSlideVisible(!isSlideVisible)}
          onBlur={() => alert('xxx')}
          onMouseLeave={() => setIsSlideVisible(true)}
          keyboardType="phone-pad"
          placeholder="Phone Number"
        />
        <Button>Next</Button>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
