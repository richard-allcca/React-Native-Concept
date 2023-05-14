/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { st } from './../theme/appThemeNavigation';
// import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> { }

export const Pagina1 = ({ navigation }: Props) => {
  // useEffect(() => {
  //   navigation.setOptions({
  //     // eslint-disable-next-line react/no-unstable-nested-components
  //     headerLeft: () => {
  //       return <Text>Menu</Text>;
  //     },
  //   });
  // }, []);

  return (
    <View style={st.globalMargin}>
      <Text style={st.title}>Navigación con argumentos</Text>

      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2')}
      />

      {/* SECTION - botones */}
      <View style={st.btnParamsContainer}>

        <TouchableOpacity
          style={{ ...st.btnGrande, backgroundColor: '#5856d6' }}
          onPress={() => navigation.navigate('PersonaScreen', { id: 1, nombre: 'Pepito' })}
        >
          <Text style={st.btnGrandeText}>Params 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={st.btnGrande}
          onPress={() => navigation.navigate('PersonRootStackParams', { id: 2, nombre: 'Root StackParams' })}
        >
          <Text style={st.btnGrandeText}>RootStackParams</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};
