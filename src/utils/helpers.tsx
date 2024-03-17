import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAuthToken = async (token: string) => {
  return await AsyncStorage.setItem('AUTH_TOKEN', token);
};
export const getAuthToken = async () => {
  return await AsyncStorage.getItem('AUTH_TOKEN');
};
