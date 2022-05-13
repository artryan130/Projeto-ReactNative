import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import WelcomeView from './views/WelcomeView';
import NameView from './views/NameView';

const Stack = createNativeStackNavigator()

export default props => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name='WelcomeView'
          component={WelcomeView}
        />
        <Stack.Screen
          name='NameView'
          component={NameView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}