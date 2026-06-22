import { StyleSheet, Text, Pressable, View, Image } from 'react-native';
import React, { useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';
import Slider from '@react-native-community/slider';
import { useFocusEffect } from '@react-navigation/native';
import { Keyboard } from 'react-native';

import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

import Songs from '../../data/songs';

export default function SongScreen() {
  const { id } = useLocalSearchParams();

  const song = useMemo(() => {
    return Songs.find((item) => item.id === Number(id));
  }, [id]);

  if (!song) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ color: 'white' }}>Música não encontrada</Text>
      </SafeAreaView>
    );
  }

  const player = useAudioPlayer(song.audio);
  const status = useAudioPlayerStatus(player);

  const isPlaying = status?.playing ?? false;

  const currentTime = status?.currentTime ?? 0;
  const duration = status?.duration ?? 1;

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  useFocusEffect(() => {
    return () => {
      Keyboard.dismiss();
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.minimizeButton} onPress={() => router.back()}>
          <AntDesign name="arrow-left" size={20} color="white" />
        </Pressable>

        <Pressable style={styles.functionButton}>
          <Entypo name="dots-three-vertical" size={20} color="white" />
        </Pressable>
      </View>

      <View style={styles.coverDiv}>
        <Image style={styles.cover} source={song.cover} />
      </View>

      <View style={styles.audioPlayer}>
        <Text style={styles.musicTitle}>{song.title}</Text>
        <Text style={styles.musicArtist}>{song.artist}</Text>

        <View style={styles.sliderPlayer}>
          <Slider
            value={Number.isFinite(currentTime) ? currentTime : 0}
            minimumValue={0}
            maximumValue={Number.isFinite(duration) ? duration : 1}
            minimumTrackTintColor="#1DB954"
            maximumTrackTintColor="#4e4e4e"
            thumbTintColor="#FFFFFF"
            onSlidingComplete={(value) => player.seekTo(value)}
          />

          <View style={styles.musicTimeView}>
            <Text style={styles.musicTime}>{formatTime(currentTime)}</Text>
            <Text style={styles.musicTime}>{formatTime(duration)}</Text>
          </View>
        </View>
      </View>

      <View style={styles.audioController}>
        <Pressable
          onPress={() => (isPlaying ? player.pause() : player.play())}
          style={styles.buttonPlayPause}
        >
          {isPlaying ? (
            <AntDesign name="pause" size={50} color="black" />
          ) : (
            <Entypo name="controller-play" size={50} color="black" />
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },
  minimizeButton: {
    backgroundColor: '#363636',
    padding: 15,
    borderRadius: 100,
  },
  functionButton: {
    backgroundColor: '#363636',
    padding: 15,
    borderRadius: 100,
  },
  coverDiv: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cover: {
    width: 320,
    height: 320,
    borderRadius: 12,
  },
  audioPlayer: {
    marginTop: 40,
    marginHorizontal: 25,
  },
  musicTitle: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  musicArtist: {
    color: 'grey',
    fontSize: 18,
  },
  sliderPlayer: {
    marginTop: 25,
  },
  musicTimeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  musicTime: {
    color: 'grey',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonPlayPause: {
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 10,
  },
  audioController: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
});
