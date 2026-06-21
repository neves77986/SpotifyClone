import { StyleSheet, Text, Pressable, View, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router, useLocalSearchParams } from 'expo-router';
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';
import Slider from '@react-native-community/slider';

import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

import Songs from '../data/songs';

export default function SongScreen() {
  const { id } = useLocalSearchParams();
  const song = Songs.find((item) => item.id === Number(id));

  const audioSource = song?.audio ?? null;

  const player = useAudioPlayer(audioSource);
  const status = useAudioPlayerStatus(player);
  const isPlaying = status?.playing;

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const currentTime = status?.currentTime ?? 0;
  const duration = status?.duration ?? 1;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.minimizeButton} onPress={router.back}>
          <AntDesign name="arrow-left" size={20} color="white" />
        </Pressable>
        <Pressable style={styles.functionButton}>
          <Entypo name="dots-three-vertical" size={20} color="white" />
        </Pressable>
      </View>

      <View style={styles.coverDiv}>
        <Image style={styles.cover} source={song?.cover}></Image>
      </View>

      <View style={styles.audioPlayer}>
        <Text style={styles.musicTitle}>{song?.title}</Text>
        <Text style={styles.musicArtist}>{song?.artist}</Text>

        <View style={styles.sliderPlayer}>
          <Slider
            value={currentTime}
            minimumValue={0}
            maximumValue={duration}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#4e4e4e"
            thumbTintColor="#FFFFFF"
            onSlidingComplete={(value) => {
              player.seekTo(value);
            }}
          />
          <View style={styles.musicTimeView}>
            <Text style={styles.musicTime}>
              {formatTime(player.currentTime)}
            </Text>
            <Text style={styles.musicTime}>{formatTime(player.duration)}</Text>
          </View>
        </View>
      </View>

      <View style={styles.audioController}>
        <Pressable
          onPress={() => {
            if (isPlaying) {
              player.pause();
            } else {
              player.play();
            }
          }}
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
    borderRadius: '50%',
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
    width: 400,
    height: 400,
  },
  audioPlayer: {
    marginTop: 50,
    marginHorizontal: 25,
  },
  musicTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  musicArtist: {
    color: 'grey',
    fontSize: 25,
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
    fontSize: 16,
    fontWeight: 'bold',
  },

  buttonPlayPause: {
    backgroundColor: 'white',
    borderRadius: '50%',
    padding: 10,
  },

  audioController: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
