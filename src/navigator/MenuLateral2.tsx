/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {Image, TouchableOpacity, Text, View} from 'react-native';

import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screen/SettingsScreen';
import {st} from '../theme/appThemeNavigation';

const Drawer = createDrawerNavigator();

export const MenuLateral2 = () => {
  return (
    <Drawer.Navigator drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>

      {/* SECTION - Section del avatar */}

      <View style={st.avatarContent}>
        <Image
          style={st.avatar}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
          }}
        />
      </View>

      {/* SECTION - Opciones del menú */}

      <TouchableOpacity style={st.menuContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('StackNavigator')}
          style={st.btnMenu}>
          <Text style={st.optionsMenu}>Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
          style={st.btnMenu}>
          <Text style={st.optionsMenu}>Ajustes</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};
