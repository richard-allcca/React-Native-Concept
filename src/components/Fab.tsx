import React from 'react';
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';

interface Props {
  title: string,
  position?: 'rigth' | 'left';
  onPress: () => void,
}

export const Fab = ({ title, onPress, position }: Props) => {

  const ios = () => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[st.fabLocation, (position === 'rigth') ? st.rigth : st.left]}
      >

        <View style={st.fab}>
          <Text style={st.fabText}>{title}</Text>
        </View>

      </TouchableOpacity>
    );
  };

  const android = () => {

    return (
      <TouchableOpacity
        style={[st.fabLocation, (position === 'rigth') ? st.rigth : st.left]}
      >
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#5a5a7e', false, 30)}
        >

          <View style={st.fab}>
            <Text style={st.fabText}>{title}</Text>
          </View>

        </TouchableNativeFeedback>

      </TouchableOpacity>
    );
  };

  return (Platform.OS === 'ios') ? ios() : android();
};

const st = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    borderRadius: 100,
  },
  rigth: {
    right: 25,
  },
  left: {
    left: 25,
  },
  fab: {
    width: 60,
    height: 60,
    backgroundColor: '#5856d6ff',
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  fabText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
