/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import banner from '../../../assets/image/banner.png';

const ListSurah = ({navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://quran-api.santrikoding.com/api/surah')
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.headerHome}>
      <ImageBackground
        source={banner}
        resizeMode="cover"
        style={styles.banner}
        imageStyle={{borderRadius: 16}}>
        <Text style={styles.judul}>Daftar Surah</Text>
      </ImageBackground>
      <FlatList
        data={data}
        scrollEnabled={false}
        keyExtractor={(item, id) => String(id)}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate('DetailScreen', {itemSurah: item.nomor});
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text style={styles.nama_latin}>{item.nama_latin}</Text>
                <Text style={styles.arti}>{item.arti}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.namaSurahArabic}>{item.nama}</Text>
                <Text style={styles.nomor}>{item.nomor}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ListSurah;

const styles = StyleSheet.create({
  banner: {
    margin: 5,
    width: '70%',
  },
  arti: {
    color: 'black',
    fontStyle: 'italic',
  },
  nama_latin: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Comfortaa-VariableFont',
  },
  judul: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'PTSansNarrow-Reguler',
    padding: 3,
    borderRadius: 15,
    marginLeft: 30,
    marginVertical: 3,
  },
  headerHome: {
    flex: 1,
    height: '23%',
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
  },
  item: {
    padding: 15,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  namaSurahArabic: {
    fontSize: 40,
    color: 'black',
  },
  nomor: {
    marginLeft: 10,
    fontSize: 10,
    backgroundColor: 'purple',
    color: 'white',
    borderRadius: 50,
    alignSelf: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
});
