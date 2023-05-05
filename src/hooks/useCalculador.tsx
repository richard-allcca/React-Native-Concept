import { useRef, useState } from 'react';

enum Operadores {
  suma, resta, multiplicar, dividir
}

export const useCalculador = () => {

  const [numero, setNumero] = useState('100');
  const [numAnterior, setNumAnterior] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  function limpiar() {
    setNumero('0');
    setNumAnterior('0');
  }

  function buildNum(numText: string) {
    // No acepta doble punto
    if (numero.includes('.') && numText === '.') {return;}

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
    if (numero.length > 0) {setNumero(numero.slice(0, -1));}

    if (numero.length === 1) {setNumero('0');}

    if (numero.length === 2 && numero.includes('-')) {setNumero('0');}
  }

  function positionNegativo() {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  }

  function changeNumPorAnterior() {
    if (numero.endsWith('.')) {
      setNumAnterior(numero.slice(0, -1));
    } else {
      setNumAnterior(numero);
    }
    setNumero('0');
  }

  function btnDividir() {
    changeNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  }
  function btnDMultiplicar() {
    changeNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  }
  function btnRestar() {
    changeNumPorAnterior();
    ultimaOperacion.current = Operadores.resta;
  }
  function btnSumar() {
    changeNumPorAnterior();
    ultimaOperacion.current = Operadores.suma;
  }

  function calcular() {
    const num1 = Number(numero);
    const num2 = Number(numAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.suma:
        setNumero(`${num2 + num1}`);
        setNumAnterior(`${num2} + ${num1}`);
        break;
      case Operadores.resta:
        setNumero(`${num2 - num1}`);
        setNumAnterior(`${num2} - ${num1}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${num2 * num1}`);
        setNumAnterior(`${num2} * ${num1}`);
        break;
      case Operadores.dividir:
        if (num2 > 0 && num1 > 0) {
          setNumero(`${num2 / num1}`);
          setNumAnterior(`${num2} / ${num1}`);
        }
        break;

      default:
        break;
    }
  }

  return {
    numero,
    numAnterior,

    setNumAnterior,
    setNumero,
    limpiar,
    buildNum,
    btnDel,
    positionNegativo,
    btnDividir,
    btnDMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  };
};
