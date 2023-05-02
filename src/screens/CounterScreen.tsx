import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

const CounterScreen = () => {
  const [count, setCount] = useState(10);

  return (
    <View style={st.container}>
      <Text style={st.title}>Contador: {count}</Text>

      <Fab title="-5" onPress={() => setCount(count - 5)} position="left" />
      <Fab title="+5" onPress={() => setCount(count + 5)} position="rigth" />

    </View>
  );
};

export default CounterScreen;

const st = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 5,
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
});
