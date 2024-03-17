import {StyleSheet} from 'react-native';
import {colors} from '../../utils';

export const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: `${colors.primary[900]}`,
    backgroundColor: `${colors.primary[900]}`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: `${colors.white[800]}`,
  },
});
