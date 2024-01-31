//App.js

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./Screens/Home";
import BandsScreen from "./Screens/Bands";
import CodesScreen from "./Screens/Codes";
import FrequenciesScreen from "./Screens/Frequencies";
import LookupScreen from "./Screens/Lookup";
import RepeatersScreen from "./Screens/Repeaters";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerBackTitle: "",
          headerShown: true,
          headerStyle: {
            backgroundColor: 'grey',
          },
          headerTintColor: '#fff',
          headerTitle: "Title",
          headerTitleStyle: {
            fontWeight: "bold",
          },
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