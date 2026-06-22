import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HeaderButton from './headerButton';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <HeaderButton titulo="Tudo"></HeaderButton>
      <HeaderButton titulo="Musicas"></HeaderButton>
      <HeaderButton titulo="Playlists"></HeaderButton>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
