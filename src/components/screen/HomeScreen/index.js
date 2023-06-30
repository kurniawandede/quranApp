/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Topbar from '../../TopBar/Topbar';
import ListSurah from './ListSurah';
import Banner from './Banner';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, marginBottom: 80}}>
      <Topbar />
      <View style={styles.container}>
        <View style={{padding: 20}}>
          <Text>Assalamualaikum</Text>
          <Text style={styles.nama}>Dede Kurniawan</Text>
        </View>
        <View style={{padding: 5}}>
          <Banner />
        </View>
        <ListSurah navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  nama: {
    fontSize: 25,
    color: 'purple',
    fontFamily: 'PTSansNarrow-Bold',
  },
});
