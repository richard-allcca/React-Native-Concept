import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import { Pagina1 } from '../screen/Pagina1';
// import { Pagina3 } from './../screen/Pagina3';
// import { Pagina2 } from './../screen/Pagina2';
// import { PersonaScreen } from './../screen/PersonaScreen';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from './../screen/SettingsScreen';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        options={{title: 'Home'}}
        name="StackNavigator"
        component={StackNavigator}
      />
      <Drawer.Screen
        options={{title: 'Settings'}}
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
