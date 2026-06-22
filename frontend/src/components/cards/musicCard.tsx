import { Text, View, Pressable, StyleSheet, Image } from 'react-native';
import { Link, router } from 'expo-router';
import { SongsTypes } from '../../app/Types/types';

type MusicCardProps = {
  song: SongsTypes;
};

export default function MusicCard({ song }: MusicCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.buttonPressed]}
      onPress={() => router.push(`../../songScreen/${song.id}`)}
    >
      <View style={styles.container}>
        <Image style={styles.musicCover} source={song.cover}></Image>
        <Text style={styles.musicFormat}>Single</Text>
        <Text style={styles.musicTitle}>{song.title}</Text>
        <Text style={styles.musicArtist}>{song.artist}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 15,
  },
  musicCover: {
    width: 150,
    height: 150,
  },
  musicFormat: {
    color: 'grey',
    fontSize: 12,
  },
  musicTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  musicArtist: {
    color: 'grey',
    fontSize: 12,
  },
  buttonPressed: {
    opacity: 0.6,
    transform: [{ scale: 0.96 }, { translateY: 2 }],
  },
});
