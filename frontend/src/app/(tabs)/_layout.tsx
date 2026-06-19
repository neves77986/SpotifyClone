import { Tabs } from 'expo-router';

import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1d1d1d',
          borderTopWidth: 0,
          height: 100,
        },
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({}) => (
            <FontAwesome name="home" size={30} color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="searchScreen"
        options={{
          title: 'Buscar',
          tabBarIcon: ({}) => <Feather name="search" size={30} color="white" />,
        }}
      />
      <Tabs.Screen
        name="libraryScreen"
        options={{
          title: 'Sua Biblioteca',
          tabBarIcon: ({}) => (
            <Ionicons name="library-outline" size={30} color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="createScreen"
        options={{
          title: 'Criar',
          tabBarIcon: ({}) => <AntDesign name="plus" size={30} color="white" />,
        }}
      />
    </Tabs>
  );
}
