//HomeScreen.js

import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../CSS/GlobalStyles";

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.h1}>Welcome to RadioNexus</Text>
      <Text style={styles.h5}>Created by K5DOC</Text>
    </View>
  );
};

export default HomeScreen;