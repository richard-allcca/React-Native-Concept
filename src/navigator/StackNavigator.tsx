import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1 } from './../screen/Pagina1';
import { Pagina2 } from './../screen/Pagina2';
import { Pagina3 } from './../screen/Pagina3';
import { PersonaScreen } from './../screen/PersonaScreen';
import { PersonRootStackParams } from './../screen/PersonRootStackParams';

export type RootStackParams = {
  Pagina1: undefined,
  Pagina2: undefined,
  Pagina3: undefined,
  PersonaScreen: {id: number, nombre: string}
  PersonRootStackParams:undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {



  return (
    <Stack.Navigator
    // initialRouteName="pagina2" // Indica una ruta inicial (opcional)
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="Pagina1" options={{title:'Página uno'}} component={Pagina1} />
      <Stack.Screen name="Pagina2" options={{title:'Página dos'}} component={Pagina2} />
      <Stack.Screen name="Pagina3" options={{title:'Página tres'}} component={Pagina3} />
      <Stack.Screen name="PersonaScreen" options={{title:'Persona'}} component={PersonaScreen} />
      <Stack.Screen name="PersonRootStackParams" options={{title:'Persona'}} component={PersonRootStackParams} />
    </Stack.Navigator>
  );
};
