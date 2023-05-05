/* eslint-disable react/self-closing-comp */
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const TareaDiseños = () => {
  return (
    <View style={st.ctn} >
      <View style={st.cajaMorada} ></View>
      <View style={st.cajaNarnanja} ></View>
      <View style={st.cajaAzul} ></View>
    </View>
  );
};

const st = StyleSheet.create({
  ctn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#28C4D9',
  },
  cajaMorada: {
    // flex:1,
    // width: '100%',
    width: 100,
    // height: '100%',
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    // alignSelf: 'flex-end',
    // position: 'absolute',
    // top: 0,
    // right: 0,
  },
  cajaNarnanja: {
    // flex:2,
    // width: '100%',
    width: 100,
    // height: '100%',
    height: 100,
    backgroundColor: '#f0a23b',
    borderWidth: 10,
    borderColor: 'white',
    // alignSelf: 'flex-end',
    // bottom: 100,
    // left: 100,
    top: 50,
    // position: 'absolute',
  },
  cajaAzul: {
    // flex: 3,
    // width: '100%',
    width: 100,
    height: 100,
    // height: '100%',
    backgroundColor: '#3b7af0',
    borderWidth: 10,
    borderColor: 'white',
    // alignSelf: 'center',
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // top: -100,
  },
});
