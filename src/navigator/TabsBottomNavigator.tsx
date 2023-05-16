/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { TabsScreen1 } from '../screen/TabsScreen1';
import { TabsScreen2 } from '../screen/TabsScreen2';

import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appThemeNavigation';
import { Text, Platform } from 'react-native';

export const Tabs = () => {
  return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.$success,
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.white,
        tabBarStyle: {
          borderTopColor: colors.$primaryGreen,
          borderTopWidth: 2,
          // elevation: 10,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 13,
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'TabsScreen1':
              iconName = 'T1';
              break;
            case 'TabsScreen2':
              iconName = 'T2';
              break;
            case 'TabsScreen3':
              iconName = 'T3';
              break;
          }
          return <Text style={{ color }} >{iconName}</Text>;
        },
      })}
    >
      <BottomTabAndroid.Screen name="TabsScreen1" options={{ title: 'Tab1' }} component={TabsScreen1} />
      <BottomTabAndroid.Screen name="TabsScreen2" options={{ title: 'Tab2' }} component={TabsScreen2} />
      <BottomTabAndroid.Screen name="TabsScreen3" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
};

const BtnTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BtnTabIOS.Navigator
      sceneContainerStyle={{
        // backgroundColor: 'white', // prefiero que sea gris
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.$primaryGreen,
        tabBarStyle: {
          borderTopColor: colors.$primaryGreen,
          borderTopWidth: 2,
          // elevation: 10,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 13,
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'TabsScreen1':
              iconName = 'T1';
              break;
            case 'TabsScreen2':
              iconName = 'T2';
              break;
            case 'TabsScreen3':
              iconName = 'T3';
              break;
          }
          return <Text style={{ color }} >{iconName}</Text>;
        },
      })}
    >
      <BtnTabIOS.Screen name="TabsScreen1" options={{ title: 'Tab1' }} component={TabsScreen1} />
      <BtnTabIOS.Screen name="TabsScreen2" options={{ title: 'Tab2' }} component={TabsScreen2} />
      <BtnTabIOS.Screen name="Stack" options={{ title: 'Stack' }} component={StackNavigator} />
    </BtnTabIOS.Navigator>
  );
};
