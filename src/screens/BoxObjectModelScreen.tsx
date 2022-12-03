import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Box Object Model</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flex: 1
  },
  title: {
    /* backgroundColor: 'red', */
    fontSize: 20,
    width: 200,
    borderWidth: 5
  },
});