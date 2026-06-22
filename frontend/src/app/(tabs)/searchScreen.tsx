import { Text, View, StyleSheet } from 'react-native';
import SearchButton from '../../components/searchButton';
import Header from '../../components/header';
import MusicSectionVertical from '@//components/sections/musicSectionVertical';
import Songs from '../../data/songs';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Header HeaderTitle="Busca" />
      <SearchButton></SearchButton>

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
