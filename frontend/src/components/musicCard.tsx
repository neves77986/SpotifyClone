import { Text, View, Pressable, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import { ImageSourcePropType } from "react-native";

type MusicCardProps = {
  id: string;
  musicFormat: string;
  musicTitle: string;
  musicArtist: string;
  musicCover: ImageSourcePropType;
};

export default function MusicCard({
  id,
  musicFormat,
  musicArtist,
  musicTitle,
  musicCover,
}: MusicCardProps) {
  return (
    <Pressable>
      <View style={styles.container}>
        <Image style={styles.musicCover} source={musicCover}></Image>
        <Text style={styles.musicFormat}>{musicFormat}</Text>
        <Text style={styles.musicTitle}>{musicTitle}</Text>
        <Text style={styles.musicArtist}>{musicArtist}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    margin: 20,
  },
  musicCover: {
    width: 150,
    height: 150,
  },
  musicFormat: {
    color: "grey",
    fontSize: 12,
  },
  musicTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  musicArtist: {
    color: "grey",
    fontSize: 12,
  },
});
