import {StyleSheet} from 'react-native';
import {colors} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: `${colors.primary[900]}`,
  },
  textWrap: {
    paddingHorizontal: 20,
    flexDirection: 'column',
    gap: 16,
    paddingTop: 40,
  },
  span: {
    fontSize: 16,
    fontWeight: '400',
    color: `${colors.white[500]}`,
  },
  balance: {
    fontSize: 32,
    fontWeight: '600',
    color: `${colors.white[800]}`,
  },
  buttonFlex: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 10,
    paddingVertical: 40,
  },
  button: {
    width: '48%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: `${colors.primary[400]}`,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: `${colors.primary[400]}`,
  },
  lineWrap: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  line: {
    width: 70,
    height: 6,
    borderRadius: 24,
    margin: 'auto',
    backgroundColor: `${colors.primary[200]}`,
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: `${colors.primary[800]}`,
  },
  row: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    justifyContent: 'space-between',
    width: '100%',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    color: `${colors.white[900]}`,
  },
  grid: {},
  transactionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
  },
  background: {
    backgroundColor: `${colors.primary[700]}`,
  },
  col: {
    flexDirection: 'column',
    gap: 8,
  },
  col2: {
    flexDirection: 'column',
    gap: 8,
    alignItems:'flex-end'
  },
  currency: {
    fontSize: 18,
    fontWeight: '500',
    color: `${colors.primary[300]}`,
  },
  creditStatusWrap: {
    borderRadius: 20,
    height: 40,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${colors.green[800]}`,
  },
  debitStatusWrap: {
    borderRadius: 20,
    height: 40,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${colors.red[700]}`,
  },
  StatusText: {
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 6,
    color: `${colors.white[900]}`,
  },
  debitAmount: {
    fontSize: 18,
    fontWeight: '500',
    color: `${colors.red[700]}`,
  },
  creditAmount: {
    fontSize: 18,
    fontWeight: '500',
    color: `${colors.green[800]}`,
  },
  date: {
    fontSize: 12,
    fontWeight: '500',
    color: `${colors.white[500]}`,
  },
});
