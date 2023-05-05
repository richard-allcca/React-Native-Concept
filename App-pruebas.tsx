/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';

// import { BoxObjectModelScreen } from './src/screens-pruebas/BoxObjectModelScreen';
// import { DimensionesScreen } from './src/screens-pruebas/DimensionesScreen';
// import { FlexDirectionBasics } from './src/screens-pruebas/FlexDirection';
// import { PositionSreen } from './src/screens-pruebas/PositionSreen';
import { TareaDiseños } from './src/screens-pruebas/TareaDiseños';
// import CounterScreen from './src/screens-pruebas/CounterScreen';
// import SaludoScreen from './src/screens-pruebas/SaludoScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      {/* <SaludoScreen />;
      <CounterScreen />
      <BoxObjectModelScreen />
      <DimensionesScreen/>
      <PositionSreen/>
      <FlexDirectionBasics/> */}
      <TareaDiseños/>
    </SafeAreaView>
  );
};

export default App;
