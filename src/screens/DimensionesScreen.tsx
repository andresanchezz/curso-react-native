import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const DimensionesScreen = () => {
  return (
    <View>

      <View style={styles.cajaMorada} />
      <View />

    </View>
  )
}



const styles = StyleSheet.create({
  container: {

  },

  cajaMorada: {
    backgroundColor: 'purple',
    width: '50%',
    height: '50%'
  },
  cajaAzul: {

  }
});