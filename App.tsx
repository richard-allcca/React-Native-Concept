/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// import CounterScreen from './src/screens/CounterScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { SafeAreaView } from 'react-native';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import SaludoScreen from './src/screens/SaludoScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      {/* <SaludoScreen />; */}
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      <DimensionesScreen/>
    </SafeAreaView>
  );
};

export default App;

