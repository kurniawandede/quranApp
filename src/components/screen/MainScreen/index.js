/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen';
import IonIcons from 'react-native-vector-icons/Ionicons';
import TestScreen from '../TestScreen';
import ToDoListScreen from '../ToDoListScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from '../DetailScreen';
import {useIsFocused} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStackScreen"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'HomeStackScreen') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Test') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'ToDoListScreen') {
            iconName = focused ? 'bookmarks' : 'bookmarks-outline';
          }

          return <IonIcons name={iconName} size={35} color="purple" />;
        },
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          marginHorizontal: 25,
          borderRadius: 25,
          height: 60,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 6,
        },
      })}>
      <Tab.Screen
        name="ToDoListScreen"
        component={ToDoListScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="HomeStackScreen"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Test"
        component={TestScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen name="Details" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}
