import { StyleSheet, Text, View, Image, Pressable, LogBox } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.space} />

      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/icons/Spotify_Icon_RGB_White.png')}
        />
        <Text style={styles.title}>Milhões de músicas à sua escolha.</Text>
        <Text style={styles.title}>Grátis no Spotify</Text>
      </View>

      <View style={styles.space} />

      <View style={styles.buttonsContainer}>
        <Pressable
          style={({ pressed }) => [
            pressed && styles.buttonPressed,
            styles.firstButton,
          ]}
          onPress={() => router.push('/(tabs)')}
        >
          <Text style={styles.firstButtonText}>Inscreva-se grátis</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            pressed && styles.buttonPressed,
            styles.secondButton,
          ]}
          onPress={() => router.push('/(tabs)')}
        >
          <Text style={styles.secondButtonText}>Entrar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
  },
  space: {
    height: 260,
  },
  firstButton: {
    width: 350,
    height: 'auto',
    alignItems: 'center',
    borderRadius: 50,
    color: '#121212',
    backgroundColor: '#0cd60cb9',
    marginBottom: 20,
  },
  secondButton: {
    alignItems: 'center',
    width: 350,
    borderRadius: 50,
    backgroundColor: '#121212',
    borderWidth: 2,
    borderColor: 'grey',
  },
  firstButtonText: {
    color: '#121212',
    fontSize: 18,
    padding: 10,
  },
  secondButtonText: {
    color: '#ffffff',
    fontSize: 18,
    padding: 10,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.96 }, { translateY: 2 }],
  },

  logo: {
    width: 50,
    height: 50,
    margin: 20,
  },
  logoContainer: {
    alignItems: 'center',
  },
  buttonsContainer: {
    alignItems: 'center',
  },
});
