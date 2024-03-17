import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParams} from './authStack';
import {RootStackParams} from './rootStack';

export type INavigationType = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParams>,
  NativeStackNavigationProp<AuthStackParams>
>;
