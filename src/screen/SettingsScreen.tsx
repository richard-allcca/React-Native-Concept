/* eslint-disable no-return-assign */
import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { st } from '../theme/appThemeNavigation';

export const SettingsScreen = () => {

  const insets = useSafeAreaInsets(); // SOLO IOS

  return (
    <View style={{ ...st.globalMargin, marginTop: insets.top = 20 }} >
      <Text>SettingsScreen</Text>
    </View>
  );
};
