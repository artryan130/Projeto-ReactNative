import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WelcomeView } from './views/WelcomeView';
import { NameView } from './views/NameView';
import { HomeView } from './views/HomeView';
import { NewView } from './views/NewView';
import { PlannedView } from './views/PlannedView';
import { HistoryView } from './views/HistoryView';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { SuggestedView } from './views/SuggestedView'
import { ViewActivity } from './views/ViewActivity'
import { ViewHistoryActivity } from './views/ViewHistoryActivity'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

export default function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name='WelcomeView'
          component={WelcomeView}
        />
        <Stack.Screen
          name='NameView'
          component={NameView}
        />
        <Stack.Screen
          name='HomeView'
          component={HomeView}
        />
        <Stack.Screen
          name='TabRoutes'
          component={TabRoutes}
        />
        <Stack.Screen
          name='SuggestedView'
          component={SuggestedView}
        />
        <Stack.Screen
          name='ViewActivity'
          component={ViewActivity}
        />
        <Stack.Screen
          name='ViewHistoryActivity'
          component={ViewHistoryActivity}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export function TabRoutes({ route }) {
  
  const { subtela } = route.params

  return (
      <Tab.Navigator 
        initialRouteName={subtela}
        screenOptions={({route}) => ({
          tabBarActiveTintColor: 'black',
          headerShown: false,
          tabBarInactiveTintColor: 'gray'
        })}
        >
        <Tab.Screen
          name='Atividades Planejadas'
          component={PlannedView}
          options= {
            { tabBarIcon: (({size, color}) => (
              <MaterialCommunityIcons name="calendar-clock-outline" size={24} color={color} />
            ))}
          }
        />
        <Tab.Screen
          name='Nova Atividade'
          component={NewView}
          options= {
            { tabBarIcon: (({size, color}) => (
              <Entypo name="add-to-list" size={24} color={color} />
            ))}
          }
        />
        <Tab.Screen
          name='Histórico de Atividades'
          component={HistoryView}
          options= {
            { tabBarIcon: (({size, color}) => (
              <MaterialIcons name="history" size={24} color={color} />
            ))}
          }
        />
      </Tab.Navigator>
  )
}