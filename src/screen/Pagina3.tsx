import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { st } from '../theme/appThemeNavigation';

interface Props extends StackScreenProps<any,any>{}

export const Pagina3 = ({ navigation }:Props) => {


  return (
    <View style={st.globalMargin} >
      <Text style={st.title} >Titulo Pagina 3</Text>

      <Button
        title="Regresar"
        onPress={() => navigation.pop() }
      />

      <Button
        title="Ir a Página 1"
        onPress={() => navigation.popToTop() }
      />

    </View>
  );
};
