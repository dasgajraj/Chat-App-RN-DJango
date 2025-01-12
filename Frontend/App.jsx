import React, { useEffect, useState } from "react";
import SplashScreen from "./screens/Splash";
import SignInScreen from "./screens/SignIn";
import SignUpScreen from "./screens/SignUp";
import HomeScreen from "./screens/Home";
import SearchScreen from "./screens/Search";
import MessagesScreen from "./screens/Message";
import { NavigationContainer } from "@react-navigation/native";
import { Alert, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const App = () => {
  const [initialized,setInitialized] = useState(false);
  const [authenticated] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(() => {
      setInitialized(true);
      }, 2000);
      return () => clearTimeout(timer);
      }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        {!initialized ? (
          <>
            <Stack.Screen name="Splash" component={SplashScreen} />
          </>
        ) : !authenticated ? (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Messages" component={MessagesScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
