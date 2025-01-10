import React, { useEffect, useLayoutEffect } from "react";
import { Text, Animated, SafeAreaView, StatusBar, View } from "react-native";
import { useFonts } from "expo-font";
import Title from "../common/Title";

const SplashScreen = ({navigation}) => {
  useFonts({
    AppleFont: require("../assets/fonts/Apple.ttf"),
  });

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])

  const translateY = new Animated.Value(0);
  const duration = 800;

  useEffect(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(translateY, {
            toValue: 20,
            duration: duration,
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: 0,
            duration: duration,
            useNativeDriver: true,
          }),
        ])
      ).start();
  }, [translateY]); 

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <StatusBar barStyle="dark-content"/>
      <Animated.View style={[{ transform: [{ translateY }] }]}>
        <Title text="Realtime Chat" color="yellow" />
      </Animated.View>
    </SafeAreaView>
  );
};

export default SplashScreen;
