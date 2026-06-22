import { Text, View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

import Header from '../../components/header';
import Navbar from '../../components/navbar';
import Songs from '../../data/songs';
import RecentMusicSection from '../../components/sections/recentMusicSection';
import MusicSection from '../../components/sections/musicSectionHorizontal';
import { useMemo } from 'react';

export default function index() {
  const recentSongs = useMemo(() => {
    return [...Songs].sort(() => Math.random() - 0.5).slice(0, 6);
  }, []);

  const trendingSongs = useMemo(() => {
    return [...Songs].sort(() => Math.random() - 0.5).slice(0, 10);
  }, []);

  const yourFavoriteSongs = useMemo(() => {
    return [...Songs].sort(() => Math.random() - 0.5).slice(0, 10);
  }, []);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Header HeaderTitle="Início" />
          <Navbar />
          <RecentMusicSection songs={recentSongs} />

          <MusicSection
            songs={yourFavoriteSongs}
            title="Suas musicas mais ouvidas!"
          />
          <MusicSection songs={trendingSongs} title="Populares" />
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
