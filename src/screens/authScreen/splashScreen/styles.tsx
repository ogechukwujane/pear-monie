import {StyleSheet} from 'react-native';
import {colors} from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  image: {
    objectFit: 'contain',
    height: 10,
    marginLeft: -25,
  },
  image2: {
    objectFit: 'contain',
    height: 8,
    marginLeft: -20,
  },
  contentContainer: {
    width: '85%',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: `${colors.primary[750]}`,
    borderTopRightRadius: 40,
  },
  flexbox: {
    flexDirection: 'column',
    gap: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
    color: `${colors.white[900]}`,
  },
  subTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: `${colors.white[900]}`,
  },
  button1: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    backgroundColor: `${colors.white[900]}`,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: `${colors.primary[900]}`,
  },
  contentContainer2: {
    width: '85%',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: `${colors.white[900]}`,
    borderTopRightRadius: 40,
  },
  header2: {
    fontSize: 18,
    fontWeight: '700',
    color: `${colors.primary[850]}`,
  },
  subTitle2: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: `${colors.primary[550]}`,
  },
  button2: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    backgroundColor: `${colors.primary[850]}`,
  },
  buttonText2: {
    fontSize: 16,
    fontWeight: '500',
    color: `${colors.white[900]}`,
  },
});
