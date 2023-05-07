/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { PropsWithChildren } from 'react';

type PreviewLayoutProps = PropsWithChildren<{
  flexDirection: string;
  values: string[];
  selectedValueDirection: string;
  setSelectedValue: (value: string) => void;
}>;

const PreviewLayout = ({
  flexDirection,
  children,
  values,
  selectedValueDirection,
  setSelectedValue,
}: PreviewLayoutProps) => (

  <View style={{ padding: 10, flex: 1 }}>

    <Text style={st.label}>{flexDirection}</Text>

    <View style={st.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[st.button, selectedValueDirection === value && st.selected]}>
          <Text
            style={[
              st.btnTextDirection,
              selectedValueDirection === value && st.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>

    <View style={[st.container, { [flexDirection]: selectedValueDirection }]}>{children}</View>

  </View>
);

export const FlexDirectionBasics = () => {
  const [flexDirection, setflexDirection] = useState('column');
  const colorsBox = ['powderblue', 'skyblue', 'steelblue'];

  return (
    <PreviewLayout
      flexDirection="flexDirection"
      values={['column', 'row', 'row-reverse', 'column-reverse']}
      selectedValueDirection={flexDirection}
      setSelectedValue={setflexDirection}
    >

      {
        colorsBox.map((box,id) => (
          <View key={box} style={[st.box, { backgroundColor: box }]}>
            <Text>{id + 1}</Text>
          </View>
        ))
      }

    </PreviewLayout>
  );
};

const st = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: '#d3d3d3',
  },
  box: {
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  btnTextDirection: {
    fontSize: 16,
    fontWeight: '500',
    color: 'coral',
    textAlign: 'center',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});
