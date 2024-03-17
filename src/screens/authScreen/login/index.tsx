import React from 'react';
import {Text, View} from 'react-native';
import {ButtonComp, InputComp, InputWithIconComp} from '../../../components';
import {styles} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMoneyBillWave} from '@fortawesome/free-solid-svg-icons';
import {useFormik} from 'formik';
import {LoginvalidationSchema} from '../validation';
import {useNavigation} from '@react-navigation/native';
import {INavigationType} from '../../../navigation/type';
import {useLoginMutation} from '../../../store/authApi';
import {setAuthToken, successToast} from '../../../utils';

export const Login = () => {
  const navigation = useNavigation<INavigationType>();
  const [login, {isLoading}] = useLoginMutation();

  const onSubmit = (values: ILogin) => {
    const payload = {
      username: values.username,
      password: values.password,
    };
    login(payload)
      .unwrap()
      .then(res => {
        setAuthToken(res.access_token);
        successToast('Successfully logged in');
        navigation.navigate('Login');
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  const {values, handleChange, touched, errors, handleSubmit} = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: LoginvalidationSchema,
    onSubmit,
  });
  return (
    <View style={styles.container}>
      <View style={styles.iconWrap}>
        <FontAwesomeIcon icon={faMoneyBillWave} color="white" size={40} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Welcome Back!</Text>
        <Text style={styles.subTitle}>Please login to use the app</Text>
        <View style={styles.flexbox}>
          <InputComp
            value={values.username}
            onChangeText={handleChange('username')}
            placeholder={'Enter your username'}
            label={'User Name*'}
            errorMessage={touched.username ? errors.username : ''}
          />
          <InputWithIconComp
            value={values.password}
            onChangeText={handleChange('password')}
            placeholder={'Enter your password'}
            label={'Password*'}
            errorMessage={touched.password ? errors.password : ''}
          />
          <ButtonComp
            text={'Login'}
            isLoading={isLoading}
            onPress={() => handleSubmit()}
          />
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('SignUp')}>
            Don't have an account? Sign up
          </Text>
        </View>
      </View>
    </View>
  );
};
