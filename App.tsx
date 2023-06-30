/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/components/screen/SplashScreen';
import TestScreen from './src/components/screen/TestScreen';
import ToDoListScreen from './src/components/screen/ToDoListScreen';
import HomeScreen from './src/components/screen/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DetailScreen from './src/components/screen/DetailScreen';
import IonIcons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

function MainScreen() {
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
        component={HomeScreen}
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

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{title: 'iQuran'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
