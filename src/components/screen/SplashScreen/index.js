/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import splash from '../../../assets/image/splash.png';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainScreen');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      {/* <Image style={styles.splash} source={splash} /> */}
      <Text style={styles.title}>iQuran</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  splash: {
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    marginBottom: 10,
    fontFamily: 'PTSansNarrow-Bold',
  },
});
