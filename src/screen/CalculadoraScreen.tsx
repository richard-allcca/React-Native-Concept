/* eslint-disable curly */
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { st } from '../theme/appTheme';
import { BotonCalc } from '../components/BotonCalc';

export const CalculadoraScreen = () => {

  const [numero, setNumero] = useState('100');
  const [numAnterior, setNumAnterior] = useState('0');

  function limpiar() {
    setNumero('0');
  }

  function buildNum(numText: string) {
    // No acepta doble punto
    if (numero.includes('.') && numText === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // punto decimal
      if (numText === '.') {
        setNumero(numero + numText);

        // evalua si es otro cero y hay un punto
      } else if (numText === '0' && numero.includes('.')) {
        setNumero(numero + numText);

        // Evalua si es diferente de cero y no tiene punto
      } else if (numText !== '0' && !numero.includes('.')) {
        setNumero(numText);

        // Evitar 00000.0
      } else if (numText === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numText);
      }

    } else {
      setNumero(numero + numText);
    }
  }

  function btnDel() {
    if (numero.length > 0) setNumero(numero.substring(0, numero.length - 1));
    if (numero.length === 1 || numero.includes('-')) setNumero('0');
  }

  function positionNegativo() {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  }

  return (
    <View style={st.calculadoraCtn} >

      <Text style={st.resultPeque} >{numAnterior}</Text>
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
        <BotonCalc bgColor="#ff9427" texto="/" action={limpiar} />

      </View>

      {/* Fila Buttons */}
      <View style={st.fila} >

        <BotonCalc texto="7" action={buildNum} />
        <BotonCalc texto="8" action={buildNum} />
        <BotonCalc texto="9" action={buildNum} />
        <BotonCalc bgColor="#ff9427" texto="+" action={limpiar} />

      </View>

      {/* Fila Buttons */}
      <View style={st.fila} >

        <BotonCalc texto="4" action={buildNum} />
        <BotonCalc texto="5" action={buildNum} />
        <BotonCalc texto="6" action={buildNum} />
        <BotonCalc bgColor="#ff9427" texto="-" action={limpiar} />

      </View>

      {/* Fila Buttons */}
      <View style={st.fila} >

        <BotonCalc texto="1" action={buildNum} />
        <BotonCalc texto="2" action={buildNum} />
        <BotonCalc texto="3" action={buildNum} />
        <BotonCalc bgColor="#ff9427" texto="*" action={limpiar} />

      </View>

      {/* Fila Buttons */}
      <View style={st.fila} >

        {/* <BotonCalc texto="1" />  action={limpiar}*/}
        <BotonCalc texto="0" isGrow action={buildNum} />
        <BotonCalc texto="." action={buildNum} />
        <BotonCalc bgColor="#ff9427" texto="=" action={limpiar} />

      </View>


    </View>
  );
};
