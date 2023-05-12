import React, { useEffect } from 'react';
import {View, Text, Button} from 'react-native';

import {CommonActions, useNavigation} from '@react-navigation/native';
import { st } from '../theme/appThemeNavigation';

// NOTE - Navegacion con useNavigation, navigate y dispatch

export const Pagina2 = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({ // change msj of navigation
      title: 'set Title',
      headerBackTitle: 'Atras',// solo ios
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={st.globalMargin} >
      <Text style={st.title} >Titulo Pagina 2</Text>

      <Button
        title="Ir a página 3, as never "
        onPress={() => navigator.navigate('pagina3' as never)}
      />

      <Button
        title="Ir a página 3, dispatch"
        onPress={() =>
          navigator.dispatch(CommonActions.navigate({name: 'pagina3'}))
        }
      />
    </View>
  );
};
