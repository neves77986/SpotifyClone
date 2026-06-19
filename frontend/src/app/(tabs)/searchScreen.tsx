import { Text, View, StyleSheet } from 'react-native';

export default function searchScreen() {
  return (
    <View style={styles.container}>
      <Text>Busca</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
