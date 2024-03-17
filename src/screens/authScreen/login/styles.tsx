import {StyleSheet} from 'react-native';
import {colors} from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 150,
    backgroundColor: `${colors.primary[900]}`,
  },
  iconWrap: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: '100%',
    top: 30,
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    minHeight: '100%',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: `${colors.white[900]}`,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: `${colors.primary[800]}`,
  },
  subTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '400',
    color: `${colors.primary[400]}`,
  },
  flexbox: {
    flexDirection: 'column',
    gap: 24,
    marginVertical: 30,
  },
  link: {
    textAlign: 'center',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    textDecorationColor: `${colors.primary[400]}`,
  },
});
