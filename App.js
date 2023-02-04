import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from
    "react-navigation-material-bottom-tabs";
import { SafeAreaProvider } from 'react-native-safe-area-context';
  
import HomeScreen from "./screens/HomeScreen";
import InterestScreen from "./screens/InterestScreen";
import ProfileScreen from "./screens/ProfileScreen";
  
const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="md-home"
            size={tabInfo.focused ? 26 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    Interests: {
      screen: InterestScreen,
      navigationOptions: {
        tabBarLabel: "Interests",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="md-settings-outline"
            size={tabInfo.focused ? 26 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="md-person-circle-outline"
            size={tabInfo.focused ? 26 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
  },
  {
    initialRouteName: "Home",
    barStyle: {backgroundColor: "#FA8128"},
  }
);
  
const Navigator = createAppContainer(TabNavigator);
  
export default function App() {
  return (
    <SafeAreaProvider>
      <Navigator>
          <HomeScreen />
      </Navigator>
    </SafeAreaProvider>
  );
}