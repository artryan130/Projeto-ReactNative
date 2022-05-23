import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WelcomeView } from './views/WelcomeView';
import { NameView } from './views/NameView';
import { HomeView } from './views/HomeView';
import { NewView } from './views/NewView';

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
        <Tab.Screen
          name='NewView'
          component={NewView}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}