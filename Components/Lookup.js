//LookupScreen.js

import React from "react";
import { Text, View } from "react-native";

import { styles } from "../CSS/GlobalStyles";

const LookupScreen = () => {
  return (
    <View>
      <Text style={styles.h1}>Callsign Lookup</Text>
      <Text style={styles.h5}>Powered by QRZ</Text>
    </View>
  );
};

export default LookupScreen;