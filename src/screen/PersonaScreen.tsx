/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import { st } from '../theme/appThemeNavigation';
import { StackScreenProps } from '@react-navigation/stack';

// NOTE - Componente de referencia, uso de RouterParams (no recomendado)

interface RouterParams {
  id: number,
  nombre: string
}

interface Props extends StackScreenProps<any,any>{}

export const PersonaScreen = ({route, navigation}: Props) => {

  const params  = route.params as RouterParams;// recibe los params

  useEffect(() => {
    navigation.setOptions({ // change msj of navigation
      title: params.nombre,
    });
  }, []);

  return (
    <View style={st.globalMargin} >
      <Text style={st.title} >
        {
          JSON.stringify(params, null, 3)
        }
      </Text>
    </View>
  );
};
