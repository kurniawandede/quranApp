/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import banner from '../../../../src/assets/image/banner.png';
import IonIcons from 'react-native-vector-icons/Ionicons';

const Banner = () => {
  return (
    <ScrollView
      horizontal
      bounces={false}
      showsHorizontalScrollIndicator={false}>
      <TouchableOpacity>
        <View style={styles.gap}>
          <ImageBackground
            source={banner}
            resizeMode="cover"
            style={styles.banner}
            imageStyle={{borderRadius: 16}}>
            <IonIcons name="time-outline" size={45} color="white" />
          </ImageBackground>
          <Text style={styles.title}>Sholat</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.gap}>
        <ImageBackground
          source={banner}
          resizeMode="cover"
          style={styles.banner}
          imageStyle={{borderRadius: 16}}>
          <IonIcons name="moon" size={42} color="white" />
        </ImageBackground>
        <Text style={styles.title}>Doa</Text>
      </View>
      <View style={styles.gap}>
        <ImageBackground
          source={banner}
          resizeMode="cover"
          style={styles.banner}
          imageStyle={{borderRadius: 16}}>
          <IonIcons name="time-outline" size={45} color="white" />
        </ImageBackground>
        <Text style={styles.title}>Sholat</Text>
      </View>
      <View style={styles.gap}>
        <ImageBackground
          source={banner}
          resizeMode="cover"
          style={styles.banner}
          imageStyle={{borderRadius: 16}}>
          <IonIcons name="moon" size={42} color="white" />
        </ImageBackground>
        <Text style={styles.title}>Doa</Text>
      </View>
    </ScrollView>
  );
};

export default Banner;

const styles = StyleSheet.create({
  gap: {
    marginLeft: 23,
  },
  banner: {
    height: 65,
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
  },
});
