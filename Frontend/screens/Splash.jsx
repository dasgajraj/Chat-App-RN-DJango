import React from "react";
import { Text, SafeAreaView, StatusBar, View } from "react-native";
import { useFonts } from "expo-font";

const Splash = () => {
  useFonts({
    AppleFont: require("../assets/fonts/Apple.ttf"),
  });

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
      <View>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 50,
            fontFamily: "AppleFont",
          }}
        >
          Realtime Chat
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
