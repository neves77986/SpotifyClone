import { Text, View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

import Header from '../../components/header';

import Songs from '../data/songs';
import RecentMusicSection from '../../components/recentMusicSection';
import MusicSectionHorizontal from '../../components/musicSectionHorizontal';

export default function index() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Header />

          <RecentMusicSection songs={Songs} />

          <MusicSectionHorizontal
            songs={Songs}
            title="Suas musicas mais ouvidas!"
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
