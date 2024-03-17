import React, {FC} from 'react';
import {ActivityIndicator, Pressable, Text} from 'react-native';
import {styles} from './styles';
import {colors} from '../../utils';

interface IButtonComp {
  text: string;
  isLoading: boolean;
}

export const ButtonComp: FC<IButtonComp> = ({text, isLoading}) => {
  return (
    <Pressable style={styles.button}>
      {!isLoading ? (
        <Text style={styles.text}>{text}</Text>
      ) : (
        <ActivityIndicator color={colors.white[900]} />
      )}
    </Pressable>
  );
};
