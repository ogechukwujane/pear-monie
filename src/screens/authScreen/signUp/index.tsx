import React from 'react';
import {Text, View} from 'react-native';
import {InputComp} from '../../../components';

export const SignUp = () => {
  return (
    <View>
      <Text>Welcome!</Text>
      <Text>Please login to use the app</Text>
      <View>
        <InputComp
          value={''}
          onChangeText={() => {}}
          placeholder={''}
          label={''}
        />
      </View>
    </View>
  );
};
