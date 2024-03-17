import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, getUserName} from '../../utils';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHamburger} from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const [name, setName] = useState('');
  useEffect(() => {
    getUserName().then(res => setName(res ? res : ''));
  }, [getUserName]);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.iconWrap}>
          <FontAwesomeIcon
            icon={faHamburger}
            color={colors.red[800]}
            size={24}
          />
        </View>
        <Text style={styles.name}>Welcome {name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 110,
    paddingVertical: 5,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconWrap: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: `${colors.primary[600]}`,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    color: `${colors.white[800]}`,
  },
});
