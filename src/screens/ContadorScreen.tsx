import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { FloatingButton } from '../components/FloatingButton';

export const Contador = () => {

  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Contador: {contador}
      </Text>

      < FloatingButton
        title="+1"
        onPress={() => setContador(contador + 1)}
        position='left'
      />

      < FloatingButton
        title="-1"
        onPress={() => setContador(contador - 1)}
        position='right'
      />
      {/* <TouchableOpacity
        style={styles.floatingButtonBottomLeft}
        onPress={() => setContador(contador - 1)}
      >
        <View style={styles.floatingButton}>
          <Text style={styles.floatingButtonText}>
            -1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
  },
})