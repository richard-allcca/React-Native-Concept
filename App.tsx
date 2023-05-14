import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuLateral } from './src/navigator/MenuLateral';
import { MenuLateral2 } from './src/navigator/MenuLateral2';

// TODO - verificar que sea necesario <StatusBar/> y sus propiedades

const App = () => {
  return (
    <NavigationContainer>

        {/* <StatusBar
          backgroundColor="black"
          barStyle="default"
        /> */}
      {/* <StackNavigator/> */}
      {/* <MenuLateral/> */}
      <MenuLateral2/>
    </NavigationContainer>
  );
};

// SECTION - HASTA LA APP CALCULADORA

// const App = () => {
  //   return (

    //  <View style={st.fondo} >
    //   <StatusBar
    //     backgroundColor="black"
    //     barStyle="default"
    //   />
    //    <FlexDirectionBasics/>
    //    <TareaDiseños/>
    //    <CalculadoraScreen />
    //   <Text >hola mundo</Text>
    //  </View>

// };

export default App;
