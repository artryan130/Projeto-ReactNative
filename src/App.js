import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WelcomeView } from './views/WelcomeView';
import { NameView } from './views/NameView';
import { HomeView } from './views/HomeView';

const Tab = createBottomTabNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="WelcomeView">
        <Tab.Screen
          name='WelcomeView'
          component={WelcomeView}
        />
        <Tab.Screen
          name='NameView'
          component={NameView}
        />
        <Tab.Screen
          name='HomeView'
          component={HomeView}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}