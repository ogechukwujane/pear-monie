import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStack, AuthStackParams} from './authStack';
import {NavigatorScreenParams} from '@react-navigation/native';
import {Home} from '../screens';

export type RootStackParams = {
  AuthStack: NavigatorScreenParams<AuthStackParams>;
  Home: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();
export const RootNavigator = () => {
  return (
    <>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="AuthStack" component={AuthStack} />
        <RootStack.Screen name="Home" component={Home} />
      </RootStack.Navigator>
    </>
  );
};
