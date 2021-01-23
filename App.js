import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} /> 

      <Text style={styles.instructions}>Hi up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo :{
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 24,
    marginHorizontal: 15,
  }
});
