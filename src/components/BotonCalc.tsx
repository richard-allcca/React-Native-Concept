import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  texto: string;
  bgColor?: string;
  isGrow?: boolean;
  action: (numTexto: string) => void;
}

export const BotonCalc = ({
  texto,
  bgColor = '#2d2d2d',
  isGrow = false,
  action,
}: Props) => {

  const getColorText = bgColor === '#9b9b9b' ? 'black' : 'white';
  const isLargeBtn = isGrow ? 180 : 80;

  return (
    <TouchableOpacity onPress={() => action(texto)} >

      <View
        style={{ ...st.boton, backgroundColor: bgColor, width: isLargeBtn }}>
        <Text
          style={{ ...st.btnText, color: getColorText }}>{texto}</Text>
      </View >

    </TouchableOpacity>
  );
};

const st = StyleSheet.create({
  boton: {
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  btnText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
  },
});
