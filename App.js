// App.js

import React from 'react';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HamburgerMenu from "./Components/Menu";
import HomeScreen from "./Components/Home";
import BandsScreen from "./Components/Bands";
import CodesScreen from "./Components/Codes";
import FrequenciesScreen from "./Components/Frequencies";
import LookupScreen from "./Components/Lookup";
import RepeatersScreen from "./Components/Repeaters";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerLeft: () => <HamburgerMenu />, // Add the HamburgerMenu component to the headerRight
        }}>

        <Stack.Screen component={HomeScreen} name="Home" options={{ title: "Home" }} />
        <Stack.Screen component={BandsScreen} name="Bands" options={{ title: "Bands" }} />
        <Stack.Screen component={CodesScreen} name="Codes" options={{ title: "Codes" }} />
        <Stack.Screen component={FrequenciesScreen} name="Frequencies" options={{ title: "Frequencies" }} />
        <Stack.Screen component={LookupScreen} name="Lookup" options={{ title: "Lookup" }} />
        <Stack.Screen component={RepeatersScreen} name="Repeaters" options={{ title: "Repeaters" }} />

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};
