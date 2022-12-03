import { Text, View } from 'react-native';

export const HolaMundo = () => {
  return (
    <View style={{
      flex: 1,
      /* backgroundColor: 'purple', */
      justifyContent: 'center',
    }}>
      <Text style={{
        fontSize: 35,
        textAlign: 'center',
      }}>
        Hola parimaripari
      </Text>
    </View>
  );
};
