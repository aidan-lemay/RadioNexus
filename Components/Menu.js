// HamburgerMenu.js

import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HamburgerMenu = () => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    setIsOpen(false); // Close the menu after navigating
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Ionicons name={isOpen ? 'close' : 'menu'} size={30} color="black" />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.sideDrawer}>
          <TouchableOpacity onPress={() => navigateToScreen('Home')} style={styles.drawerItem}>
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('Bands')} style={styles.drawerItem}>
            <Text>Bands</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('Codes')} style={styles.drawerItem}>
            <Text>Codes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('Frequencies')} style={styles.drawerItem}>
            <Text>Frequencies</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('Lookup')} style={styles.drawerItem}>
            <Text>Lookup</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('Repeaters')} style={styles.drawerItem}>
            <Text>Repeaters</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    zIndex: 1,
  },
  menuButton: {
    padding: 10,
  },
  sideDrawer: {
    position: 'absolute',
    top: 70,
    left: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    zIndex: 2,
  },
  drawerItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
});

export default HamburgerMenu;