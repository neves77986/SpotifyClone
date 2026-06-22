import { Text, View, Pressable, StyleSheet, Image } from 'react-native';
import SongsTypes from '../../Types/types';
import { router } from 'expo-router';
type recentMusicCardProps = {
  song: SongsTypes;
};

export default function RecentMusicCard({ song }: recentMusicCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.buttonPressed]}
      onPress={() => router.push(`../../songScreen/${song.id}`)}
    >
      <View style={styles.container}>
        <Image style={styles.musicCover} source={song.cover}></Image>
        <Text style={styles.musicTitle}>{song.title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#363636',
    margin: 7,
    width: 200,
    borderRadius: 4,
  },
  musicCover: {
    width: 50,
    height: 50,
  },
  musicTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }, { translateY: 2 }],
  },
});
