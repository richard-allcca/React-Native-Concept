/* eslint-disable no-return-assign */
import React from 'react';

import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { st } from '../theme/appThemeNavigation';

export const TabsScreen1 = () => {

  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...st.globalMargin, marginTop: insets.top = 20 }} >
      <Text>TabsScreen1</Text>
    </View>
  );
};
