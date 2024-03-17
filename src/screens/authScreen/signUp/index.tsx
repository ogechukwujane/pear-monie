import React from 'react';
import {Text, View} from 'react-native';
import {ButtonComp, InputComp, InputWithIconComp} from '../../../components';
import {styles} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMoneyBillWave} from '@fortawesome/free-solid-svg-icons';
import {useFormik} from 'formik';
import {SignUpvalidationSchema} from '../validation';
import {INavigationType} from '../../../navigation/type';
import {useNavigation} from '@react-navigation/native';
import {useSignupMutation} from '../../../store/authApi';
import {
  CustomKeyboardAvoidingView,
  setUserName,
  successToast,
} from '../../../utils';

export const SignUp = () => {
  const navigation = useNavigation<INavigationType>();
  const [signup, {isLoading}] = useSignupMutation();

  const onSubmit = (values: ISignUp) => {
    const payload = {
      username: values.username,
      email: values.email,
      password: values.password,
    };
    signup(payload)
      .unwrap()
      .then(res => {
        successToast('Successfully Signed Up');
        setUserName(res.username);
        navigation.navigate('Login');
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  const {values, handleChange, touched, errors, handleSubmit} = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: SignUpvalidationSchema,
    onSubmit,
  });
  return (
    <CustomKeyboardAvoidingView>
      <View style={styles.container}>
        <View style={styles.iconWrap}>
          <FontAwesomeIcon icon={faMoneyBillWave} color="white" size={40} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.header}>Welcome!</Text>
          <Text style={styles.subTitle}>Please signup to use the app</Text>
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
            <InputComp
              value={values.email}
              onChangeText={handleChange('email')}
              placeholder={'Enter your email'}
              label={'Email*'}
              errorMessage={touched.email ? errors.email : ''}
            />
            <ButtonComp
              text={'Sign Up'}
              isLoading={isLoading}
              onPress={() => handleSubmit()}
            />
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('Login')}>
              Already have an account? Login
            </Text>
          </View>
        </View>
      </View>
    </CustomKeyboardAvoidingView>
  );
};
