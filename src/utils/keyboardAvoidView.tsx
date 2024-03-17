import {useHeaderHeight} from '@react-navigation/elements';
import React, {ReactElement} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';

type ICustomKeyboardAvoidingView = {
  children: ReactElement | ReactElement[];
};
export const CustomKeyboardAvoidingView: React.FC<
  ICustomKeyboardAvoidingView
> = ({children}) => {
  const height = useHeaderHeight();
  const flex = {flex: 1};
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      contentContainerStyle={flex}
      behavior={Platform.select({ios: 'padding', android: undefined})}
      keyboardVerticalOffset={Platform.select({
        ios: 0,
        android: height,
      })}
      enabled={true}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CustomKeyboardAvoidingView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
