import { Text, View, Pressable, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';
import { SongsTypes } from '../../app/Types/types';

type MusicCardProps = {
  song: SongsTypes;
};

export default function MusicCardVertical({ song }: MusicCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.buttonPressed]}
      onPress={() => router.push(`../../songScreen/${song.id}`)}
    >
      <View style={styles.container}>
        <Image style={styles.musicCover} source={song.cover}></Image>

        <View style={styles.description}>
          <Text style={styles.musicTitle}>{song.title}</Text>
          <View style={styles.especifications}>
            <Text style={styles.musicFormat}>Musica</Text>
            <Text style={styles.musicArtist}>{song.artist}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    marginHorizontal: 20,
  },
  description: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginHorizontal: 10,
  },
  especifications: {
    flexDirection: 'row',
    gap: 10,
  },
  musicCover: {
    width: 75,
    height: 75,
  },
  musicFormat: {
    color: 'grey',
    fontSize: 14,
  },
  musicTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  musicArtist: {
    color: 'grey',
    fontSize: 14,
  },
  buttonPressed: {
    transform: [{ scale: 0.96 }, { translateY: 2 }],
  },
});
