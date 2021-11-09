import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen";
import NotificationsScreen from "./components/NotificationsScreen";
import ProfileScreen from "./components/ProfileScreen";
import SettingsScreen from "./components/SettingsScreen";
import LinkingButtonScreen from "./components/LinkingButtonScreen";
import LockScreen from "./components/LockScreen";
import Account from "./components/Account";
import Tables from "./components/Tables";
import QrReader from "./components/QrReader";
import linking from "./linking";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <>
      <Stack.Navigator /* screenOptions={{ headerShown: false }} */>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="LinkingButton" component={LinkingButtonScreen} />
        <Stack.Screen name="LockScreen" component={LockScreen} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Tables" component={Tables} />
        {/* <Stack.Screen name="QrReader" component={QrReader} /> */}
      </Stack.Navigator>
    </>
  );
}
export default function App() {
  return (
    <>
      <NavigationContainer linking={linking}>
        <MyStack />
      </NavigationContainer>
    </>
  );
}
