import { Text, View, StyleSheet } from "react-native";

export default function CreateScreen() {
  return (
    <View style={styles.container}>
      <Text>Criar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
