import { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import {
  faBell,
  faInbox,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons"; // Correct icon imports

import RequestScreen from "./Requests";
import FriendsScreen from "./Friends";
import ProfileScreen from "./Profile";
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
            }}
          >
            <FontAwesomeIcon
            style={{marginRight: 20 }}
              icon={faSearch} 
              size={22}
              color="#404040"
            />
          </TouchableOpacity>
        ),
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          switch (route.name) {
            case "Requests":
              icon = faBell;
              break;
            case "Friends":
              icon = faInbox;
              break;
            case "Profile":
              icon = faUser;
              break;
            default:
              icon = faBell;
          }

          return <FontAwesomeIcon icon={icon} size={28} color={color} />;
        },
        tabBarActiveTintColor: "#202020",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Requests" component={RequestScreen} />
      <Tab.Screen name="Friends" component={FriendsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
