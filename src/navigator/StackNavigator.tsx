import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1 } from './../screen/Pagina1';
import { Pagina2 } from './../screen/Pagina2';
import { Pagina3 } from './../screen/Pagina3';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="pagina1" component={Pagina1} />
      <Stack.Screen name="pagina2" component={Pagina2} />
      <Stack.Screen name="pagina3" component={Pagina3} />
    </Stack.Navigator>
  );
};
