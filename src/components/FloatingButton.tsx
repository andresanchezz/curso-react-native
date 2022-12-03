import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface PropiedadesFloatingButton {
  title: string;
  onPress?: () => void;
  position?: 'right' | 'left';
}

export const FloatingButton = ({ title, onPress, position = 'right' }: PropiedadesFloatingButton) => {

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.4}
        style={
          (position === 'right')
            ? styles.floatingButtonBottomRight :
            styles.floatingButtonBottomLeft
        }
        onPress={onPress}
      >
        <View style={styles.floatingButton}>
          <Text style={styles.floatingButtonText}>
            {title}</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}



const styles = StyleSheet.create({
  floatingButtonBottomRight: {
    position: "absolute",
    bottom: 25,
    right: 25,
  },
  floatingButtonBottomLeft: {
    position: "absolute",
    bottom: 25,
    left: 25,
  },
  floatingButton: {
    backgroundColor: 'black',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  floatingButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  }
})