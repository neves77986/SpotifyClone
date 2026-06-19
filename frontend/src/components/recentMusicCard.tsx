import { Text, View, Pressable, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import { ImageSourcePropType } from 'react-native';

type recentMusicCardProps = {
  id: string;
  musicTitle: string;
  musicCover: ImageSourcePropType;
};

export default function RecentMusicCard({
  id,
  musicTitle,
  musicCover,
}: recentMusicCardProps) {
  return (
    <Pressable style={({ pressed }) => [pressed && styles.buttonPressed]}>
      <View style={styles.container}>
        <Image style={styles.musicCover} source={musicCover}></Image>
        <Text style={styles.musicTitle}>{musicTitle}</Text>
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
