import { StyleSheet, Text, SafeAreaView, StatusBar, View } from "react-native";
import React from "react";

const Splash = () => {
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
        <Text style={{ color: "white", textAlign: "center", fontSize: 48 }}>
          RealTimeChat
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
