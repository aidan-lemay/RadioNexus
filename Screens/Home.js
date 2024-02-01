//HomeScreen.js

import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../CSS/GlobalStyles";

const navigation = useNavigation();

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.h1}>Welcome to RadioNexus</Text>
      <Text style={styles.h5}>Created by K5DOC</Text>
      <View style={styles.containerBtn}>

        <TouchableOpacity style={styles.btn}
        onPress={() => [navigation.navigate("Bands")]}>
          <Text style={styles.textBtn}>Bands</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}
        onPress={() => [navigation.navigate("Codes")]}>
          <Text style={styles.textBtn}>Codes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}
        onPress={() => [navigation.navigate("Frequencies")]}>
          <Text style={styles.textBtn}>Frequencies</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}
        onPress={() => [navigation.navigate("Lookup")]}>
          <Text style={styles.textBtn}>Lookup</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}
        onPress={() => [navigation.navigate("Repeaters")]}>
          <Text style={styles.textBtn}>Repeaters</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default HomeScreen;