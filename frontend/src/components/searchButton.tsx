import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function SearchButton() {
  return (
    <View style={styles.searchBar}>
      <EvilIcons name="search" size={24} color="black" />
      <TextInput
        style={styles.searchInput}
        placeholder="O que você quer ouvir?"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
  },

  searchInput: {
    marginHorizontal: 10,
    fontSize: 14,
    width: 1000,
    borderWidth: 0,
  },
});
