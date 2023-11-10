
import { Feather } from '@expo/vector-icons';
import {  Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {


  return (
    <Tabs>
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <Feather name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
