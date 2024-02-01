//LookupScreen.js

import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "../CSS/GlobalStyles";

const LookupScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.h1}>Bands</Text>
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

export default LookupScreen;