/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Topbar from '../../TopBar/Topbar';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Topbar />
      <View style={styles.container}>
        <Text>TESTTTT</Text>
        <Text style={styles.nama}>Welcome back, Dede Kurniawan</Text>
        <View style={styles.headerHome}></View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  nama: {
    fontSize: 25,
    color: 'purple',
    fontFamily: 'PTSansNarrow-Bold',
  },
  headerHome: {
    flex: 1,
    height: '23%',
    backgroundColor: 'purple',
    borderRadius: 30,
    marginTop: 20,
  },
});
