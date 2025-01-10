import React, { useEffect } from "react";
import { Text, Animated, SafeAreaView, StatusBar, View } from "react-native";
import { useFonts } from "expo-font";
import Title from "../common/Title";

const Splash = () => {
  useFonts({
    AppleFont: require("../assets/fonts/Apple.ttf"),
  });
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
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <StatusBar barStyle="dark-content" />
      <Animated.View style={[{ transform: [{ translateY }] }]}>
        <Title text="Realtime Chat" color="plum" />
      </Animated.View>
    </SafeAreaView>
  );
};

export default Splash;
