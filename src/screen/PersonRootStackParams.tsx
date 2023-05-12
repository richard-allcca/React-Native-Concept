import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import { st } from '../theme/appThemeNavigation';

interface Props extends StackScreenProps<RootStackParams, 'PersonRootStackParams'> { }

export const PersonRootStackParams = ({route}: Props) => {

  const params = route.params;

  return (
    <View style={st.globalMargin} >
      <Text style={st.title} >
        {
          JSON.stringify(params,null,3)
        }
      </Text>
    </View>
  );
};
