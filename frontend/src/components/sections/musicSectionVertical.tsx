import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import MusicCardVertical from '../cards/musicCardVertical';

type SectionProps = {
  title: string;
  songs: any;
};

export default function MusicSectionVertical({ title, songs }: SectionProps) {
  return (
    <>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={songs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MusicCardVertical song={item} />}
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
