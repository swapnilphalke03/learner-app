import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { useTranslation } from '../context/LanguageContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { default as SimpleIcon } from 'react-native-vector-icons/SimpleLineIcons';
import { default as MaterialIcons } from 'react-native-vector-icons/MaterialCommunityIcons';
import DashboardStack from './DashboardStack';
import Courses from '../screens/Dashboard/Courses';
import Profile from '../screens/Dashboard/Profile';

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName="DashboardStack"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          if (route.name === 'DashboardStack') {
            return (
              <Icon
                name="my-library-books"
                color={focused ? '#987100' : 'black'}
                size={30}
              />
            );
          } else if (route.name === 'Courses') {
            return (
              <SimpleIcon
                name="graduation"
                color={focused ? '#987100' : 'black'}
                size={30}
              />
            );
          } else if (route.name === 'Profile') {
            return (
              <MaterialIcons
                name="account-circle-outline"
                color={focused ? '#987100' : 'black'}
                size={30}
              />
            );
          }
        },
        tabBarStyle: styles.footer,
        tabBarActiveTintColor: '#987100',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="DashboardStack"
        component={DashboardStack}
        options={{ tabBarLabel: t('content') }}
      />
      <Tab.Screen
        name="Courses"
        component={Courses}
        options={{ tabBarLabel: t('courses') }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarLabel: t('profile') }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 70,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabScreen;
