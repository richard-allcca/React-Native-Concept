import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { useCalculador } from '../hooks/useCalculador';

export const CalculadoraScreen = () => {

  const { numero,
    numAnterior,
    limpiar,
    buildNum,
    btnDel,
    positionNegativo,
    btnDividir,
    btnDMultiplicar,
    btnRestar,
    btnSumar,
    calcular} = useCalculador();

  return (
    <View style={st.calculadoraCtn} >
      {
        (numAnterior !== '0') && (<Text style={st.resultPeque} >{numAnterior}</Text>)
      }
      <Text
        style={st.result}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {numero}
      </Text>

      {/* Fila Buttons */}
      <View style={st.fila} >

        <BotonCalc bgColor="#9b9b9b" texto="C" action={limpiar} />
        <BotonCalc bgColor="#9b9b9b" texto="+/-" action={positionNegativo} />
        <BotonCalc bgColor="#9b9b9b" texto="del" action={btnDel} />
        <BotonCalc bgColor="#ff9427" texto="/" action={btnDividir} />

      </View>

      {/* Fila Buttons */}
      <View style={st.fila} >

        <BotonCalc texto="7" action={buildNum} />
        <BotonCalc texto="8" action={buildNum} />
        <BotonCalc texto="9" action={buildNum} />
        <BotonCalc bgColor="#ff9427" texto="*" action={btnDMultiplicar} />

      </View>

      {/* Fila Buttons */}
      <View style={st.fila} >

        <BotonCalc texto="4" action={buildNum} />
        <BotonCalc texto="5" action={buildNum} />
        <BotonCalc texto="6" action={buildNum} />
        <BotonCalc bgColor="#ff9427" texto="-" action={btnRestar} />

      </View>

      {/* Fila Buttons */}
      <View style={st.fila} >

        <BotonCalc texto="1" action={buildNum} />
        <BotonCalc texto="2" action={buildNum} />
        <BotonCalc texto="3" action={buildNum} />
        <BotonCalc bgColor="#ff9427" texto="+" action={btnSumar} />

      </View>

      {/* Fila Buttons */}
      <View style={st.fila} >

        {/* <BotonCalc texto="1" />  action={limpiar}*/}
        <BotonCalc texto="0" isGrow action={buildNum} />
        <BotonCalc texto="." action={buildNum} />
        <BotonCalc bgColor="#ff9427" texto="=" action={calcular} />

      </View>


    </View>
  );
};

const st = StyleSheet.create({
  calculadoraCtn: {
    flex:1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  resultPeque: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
