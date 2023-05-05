/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const SaludoScreen = () => {
  let nombre = 'Richard';
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 45,
          textAlign: 'center',
        }}>
        Hola mundo! otra vez {nombre} 😁
      </Text>
    </View>
  );
};

export default SaludoScreen;
