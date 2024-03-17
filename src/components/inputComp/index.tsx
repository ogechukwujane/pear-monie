import React, {FC, useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {colors} from '../../utils';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

interface IInputComp {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  label: string;
  errorMessage?: string;
}

export const InputComp: FC<IInputComp> = ({
  value,
  onChangeText,
  placeholder,
  label,
  errorMessage,
}) => {
  return (
    <View style={styles.inputWrap}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.white[400]}
      />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

export const InputWithIconComp: FC<IInputComp> = ({
  value,
  onChangeText,
  placeholder,
  label,
  errorMessage,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.inputWrap}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.passwordWrap}>
        <TextInput
          style={styles.passwordInput}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.white[400]}
          secureTextEntry={showPassword ? false : true}
        />
        <Pressable
          style={styles.iconButton}
          onPress={() => setShowPassword(prev => !prev)}>
          <FontAwesomeIcon
            icon={!showPassword ? faEye : faEyeSlash}
            size={20}
            color={colors.primary[800]}
          />
        </Pressable>
      </View>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};
