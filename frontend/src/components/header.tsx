import { Text, View, StyleSheet } from 'react-native';
import HeaderButton from './headerButton';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.avatarIcon}></View>
        <Text style={styles.pageTitle}>Início</Text>
        <View style={styles.utilityIcons}>
          <EvilIcons name="search" size={24} color="white" />
          <EvilIcons name="gear" size={24} color="white" />
        </View>
      </View>

      <View style={styles.navbar}>
        <HeaderButton titulo="Tudo"></HeaderButton>
        <HeaderButton titulo="Musicas"></HeaderButton>
        <HeaderButton titulo="Playlists"></HeaderButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#121212',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  avatarIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: 'blue',
    margin: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  utilityIcons: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
