import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {INavigationType} from '../../../navigation/type';
import {colors} from '../../../utils';

export const WaitScreen = () => {
  const navigation = useNavigation<INavigationType>();
  useEffect(() => {
    const timeout = setTimeout(() => {
      return navigation.navigate('SplashScreen');
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size={20} color={colors.white[900]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${colors.primary[900]}`,
  },
});
