import {StyleSheet} from 'react-native';
import {colors} from '../../utils';

export const styles = StyleSheet.create({
  inputWrap: {
    gap: 8,
  },
  input: {
    height: 50,
    width: '100%',
    borderRadius: 8,
    paddingLeft: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: `${colors.primary[900]}`,
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
    color: `${colors.black[200]}`,
  },
  errorMessage: {
    fontSize: 12,
    fontWeight: '400',
    color: `${colors.red[900]}`,
  },
  iconButton: {
    width: 20,
    height: 20,
  },
  passwordInput: {
    width: '90%',
    height: '100%',
    paddingLeft: 12,
  },
  passwordWrap: {
    paddingRight: 12,
    height: 50,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: `${colors.primary[900]}`,
  },
});
