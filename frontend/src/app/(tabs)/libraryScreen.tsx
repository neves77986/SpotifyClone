import { Text, View, StyleSheet } from 'react-native';

export default function libraryScreen() {
  return (
    <View style={styles.container}>
      <Text>biblioteca</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
