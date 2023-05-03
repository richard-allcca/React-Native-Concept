import React from 'react';
import { StyleSheet, View } from 'react-native';

export const PositionSreen = () => {
  return (
    <View style={st.ctn} >
      <View style={st.cajaMorada} ></View>
      <View style={st.cajaNarnanja} ></View>
    </View>
  );
};

const st = StyleSheet.create({
  ctn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28C4D9',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  cajaNarnanja: {
    width: 100,
    height: 100,
    backgroundColor: '#f0a23b',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
    // left: 0,
    // top: 0,

    // short cut para left right top bottom
    // ...StyleSheet.absoluteFillObject
  },
});
