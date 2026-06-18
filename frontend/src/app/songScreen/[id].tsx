import { StyleSheet, Text, Pressable, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SongScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Pressable style={styles.minimizeButton}></Pressable>
        </View>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {},
    header: {},
    minimizeButton: {},
})