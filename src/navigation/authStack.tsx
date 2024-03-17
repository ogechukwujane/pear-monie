import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, SignUp, WaitScreen} from '../screens';

export type AuthStackParams = {
  WaitScreen: undefined;
  SignUp: undefined;
  Login: undefined;
};

const AuthStacks = createNativeStackNavigator<AuthStackParams>();
export const AuthStack = () => {
  return (
    <>
      <AuthStacks.Navigator screenOptions={{headerShown: false}}>
        <AuthStacks.Screen name="WaitScreen" component={WaitScreen} />
        <AuthStacks.Screen name="SignUp" component={SignUp} />
        <AuthStacks.Screen name="Login" component={Login} />
      </AuthStacks.Navigator>
    </>
  );
};
