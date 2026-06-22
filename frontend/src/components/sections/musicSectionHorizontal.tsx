import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

import MusicCard from '../cards/musicCard';

type SectionProps = {
  title: string;
  songs: any;
};

export default function MusicSectionHorizontal({ title, songs }: SectionProps) {
  return (
    <>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        horizontal={true}
        maxToRenderPerBatch={2}
        showsHorizontalScrollIndicator={false}
        data={songs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MusicCard song={item} />}
      />
    </>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 15,
  },
});
