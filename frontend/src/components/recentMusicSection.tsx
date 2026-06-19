import { FlatList } from 'react-native';
import React from 'react';
import RecentMusicCard from './recentMusicCard';

type RecentMusicSectionProps = {
  songs: any;
};

export default function RecentMusicSection({ songs }: RecentMusicSectionProps) {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
      data={songs}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <RecentMusicCard
          id={item.id}
          musicTitle={item.title}
          musicCover={item.cover}
        />
      )}
    />
  );
}
