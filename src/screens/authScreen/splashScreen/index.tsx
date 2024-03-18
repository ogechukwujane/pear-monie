import React, {
  Image,
  ImageBackground,
  Pressable,
  Text,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {INavigationType} from '../../../navigation/type';

export const SplashScreen = () => {
  const navigation = useNavigation<INavigationType>();
  return (
    <Swiper showsPagination={false} index={1}>
      <ImageBackground
        source={require('../../../../assets/images/splash2.png')}
        resizeMode="cover"
        style={styles.container}>
        <View style={styles.contentContainer2}>
          <View style={styles.flexbox}>
            <Image
              source={require('../../../../assets/images/bar2.png')}
              style={styles.image2}
            />
            <Text style={styles.header2}>Transfer Money With Ease</Text>
            <Text style={styles.subTitle2}>
              Making money is hard enough, we make transfering it easy enough.
            </Text>
            <Pressable
              style={styles.button2}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.buttonText2}>Start banking</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
      <ImageBackground
        source={require('../../../../assets/images/splash1.png')}
        resizeMode="cover"
        style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.flexbox}>
            <Image
              source={require('../../../../assets/images/bar1.png')}
              style={styles.image}
            />
            <Text style={styles.header}>Transfer That Is Safe</Text>
            <Text style={styles.subTitle}>
              You have nothing to be scared about, we got you covered.
            </Text>
            <Pressable
              style={styles.button1}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.buttonText}>Start banking</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </Swiper>
  );
};
