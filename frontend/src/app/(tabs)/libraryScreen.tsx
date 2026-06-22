import { Text, View, StyleSheet } from 'react-native';
import Header from '../../components/header';
import MusicSectionVertical from '@//components/sections/musicSectionVertical';
import Songs from '../data/songs';
import Navbar from '../../components/navbar';

export default function libraryScreen() {
  return (
    <View style={styles.container}>
      <Header HeaderTitle="Biblioteca" />
      <Navbar />

      <MusicSectionVertical songs={Songs} title="Recentes" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
