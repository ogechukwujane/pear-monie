import React from 'react';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';

const text1 = {
  fontSize: 14,
  fontWeight: '500',
  color: 'black',
};
const padding = {paddingHorizontal: 15};
const successBorder = {borderLeftColor: 'green'};
const errorBorder = {borderLeftColor: 'red'};
export const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={successBorder}
      visibilityTime={4000}
      contentContainerStyle={padding}
      text1Style={text1}
      text1NumberOfLines={2}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={errorBorder}
      visibilityTime={4000}
      text1Style={text1}
      text1NumberOfLines={2}
    />
  ),
};

export const successToast = (data: string | any) => {
  Toast.show({
    type: 'success',
    text1: data,
    position: 'top',
  });
};
export const errorToast = (data: string | any) => {
  Toast.show({
    type: 'error',
    text1: data,
    position: 'top',
  });
};
