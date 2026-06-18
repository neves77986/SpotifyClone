import { Text, View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import react from "react";
import Header from "../../components/header";
import MusicCard from "../../components/musicCard";

import { Songs } from "../data/songs";
import { useLocalSearchParams } from "expo-router";

export default function HomeScreen() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header />
        <Text style={styles.sectionTittle}>Suas musicas mais ouvidas!</Text>

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.sectionOne}
          data={Songs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MusicCard
              id={item.id}
              musicArtist={item.artist}
              musicTitle={item.title}
              musicFormat={item.format}
              musicCover={item.cover}
            ></MusicCard>
          )}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    margin: 20,
  },
  sectionOne: {},
  sectionTittle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    margin: 15,
  },
});
