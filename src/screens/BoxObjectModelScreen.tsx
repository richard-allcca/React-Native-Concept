import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={st.container} >
      <Text style={st.title} >Box Object Model</Text>
    </View>
  );
};

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afeeee',
  },
  title: {
    height: 300,
    fontSize: 20,
    backgroundColor: 'orange',
    padding: 15,
    margin: 10,
    textAlign: 'center',
  },
});
