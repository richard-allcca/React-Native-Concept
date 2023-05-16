/* eslint-disable no-return-assign */
import React from 'react';
import {View, Text} from 'react-native';
import { st } from '../theme/appThemeNavigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const TabsScreen2 = () => {

  const insets = useSafeAreaInsets()

  return (
    <View style={{...st.globalMargin, marginTop: insets.top = 20}} >
      <Text>TabsScreen2</Text>
    </View>
  );
};
