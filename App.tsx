/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';
// import CounterScreen from './src/screens/CounterScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { PositionSreen } from './src/screens/PositionSreen';
// import { FlexDirectionBasics } from './src/screens/FlexDirection';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import SaludoScreen from './src/screens/SaludoScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      {/* <SaludoScreen />; */}
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen/> */}
      <PositionSreen/>
      {/* <FlexDirectionBasics/> */}
    </SafeAreaView>
  );
};

export default App;
