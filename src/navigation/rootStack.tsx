import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStack, AuthStackParams} from './authStack';
import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParams = {
  AuthStack: NavigatorScreenParams<AuthStackParams>;
};

const RootStack = createNativeStackNavigator<RootStackParams>();
export const RootNavigator = () => {
  return (
    <>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="AuthStack" component={AuthStack} />
      </RootStack.Navigator>
    </>
  );
};
