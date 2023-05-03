import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');
// const windowHeight = Dimensions.get('window').height;

export const DimensionesScreen = () => {

  const { width, height } = useWindowDimensions();

  return (
    <View>
      <View style={[st.ctn, st.ctnTop]} >
        <Text style={st.txt} >DimensionesScreen</Text>
      </View>
      <View style={{
        ...st.ctn,
        width: width * 0.50,
      }} >
        <Text style={st.txt} >Width: {Math.round(width)}, Height: {Math.round(height)}</Text>
      </View>
    </View>
  );
};

const st = StyleSheet.create({
  ctnTop: {
    backgroundColor: '#98fb98',
  },
  ctn: {
    height: '50%',
    backgroundColor: '#eee8aa',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  txt: {
    color: 'blue',
    fontSize: 20,
    backgroundColor: '#efeeee',
    padding: 5,
  },
});
