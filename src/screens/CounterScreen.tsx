/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const CounterScreen = () => {
  const [count, setCount] = useState(10);

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: '#4169e1',
        justifyContent: 'center',
        // alignItems: 'center',
        paddingBottom: 30,
      }}>
      <Text
        style={{
          fontSize: 35,
          textAlign: 'center',
        }}>
        Contador: {count}
      </Text>
      {/* <Button onPress={() => setCount(count + 5)} title="+5" />
      <Button onPress={() => setCount(count - 5)} title="-5" /> */}
      <TouchableOpacity onPress={() => setCount(count + 5)}>
        <View
          style={{
            height: 30,
            backgroundColor: '#4169e1',
            borderRadius: 100,
            overflow: 'hidden',
          }}>
          <Text>click me!!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CounterScreen;
