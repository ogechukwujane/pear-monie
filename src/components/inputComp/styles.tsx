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
    borderColor: `${colors.white[800]}`,
  },
  label: {
    fontSize: 12,
    fontWeight: '400',
    color: `${colors.white[800]}`,
  },
  errorMessage: {
    fontSize: 16,
    fontWeight: '400',
    color: `${colors.red[800]}`,
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
    height: 50,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: `${colors.white[800]}`,
  },
});
