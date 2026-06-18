import { Text, View, StyleSheet } from 'react-native';

export default function LibraryScreen() {
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
