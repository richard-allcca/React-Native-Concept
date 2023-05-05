import React from 'react';

import { CalculadoraScreen } from './src/screen/CalculadoraScreen';
import { st } from './src/theme/appTheme';
import { StatusBar, View } from 'react-native';

// TODO - verificar que sea necesario <StatusBar/> y sus propiedades

const App = () => {
  return (
    <View style={st.fondo} >
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
      />

      <CalculadoraScreen />
    </View>
  );
};

export default App;
