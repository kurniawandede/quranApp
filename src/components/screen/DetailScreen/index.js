/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import banner from '../../../assets/image/banner.png';
import Sound from 'react-native-sound';

const DetailScreen = ({route, navigation}) => {
  const {itemSurah} = route.params;
  const [detail, setDetail] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [pausedPosition, setPausedPosition] = useState(0);
  const soundRef = useRef(null);

  const playSound = () => {
    if (soundRef.current && !isPlaying) {
      setIsPlaying(true);
      soundRef.current.play(success => {
        if (success) {
          setIsPlaying(false);
          soundRef.current.release();
        }
      });
    } else if (!soundRef.current) {
      soundRef.current = new Sound(detail.audio, '', error => {
        if (error) {
          console.log('Error loading sound: ', error);
          return;
        }
        setIsPlaying(true);
        soundRef.current.play(success => {
          if (success) {
            setIsPlaying(false);
            soundRef.current.release();
          }
        });
      });
    }
  };

  const pauseSound = () => {
    if (soundRef.current && isPlaying) {
      setIsPlaying(false);
      soundRef.current.pause();
      soundRef.current.getCurrentTime(seconds => {
        setPausedPosition(seconds);
      });
    }
  };

  useEffect(() => {
    fetch(`https://quran-api.santrikoding.com/api/surah/${itemSurah}`)
      .then(res => res.json())
      .then(json => {
        setDetail(json);
      });

    return () => {
      // Cleanup function to stop the audio when the component unmounts
      if (soundRef.current) {
        soundRef.current.stop();
        soundRef.current.release();
      }
    };
  }, []);
  return (
    <>
      <ScrollView style={styles.container}>
        <ImageBackground
          style={styles.headerHome}
          source={banner}
          imageStyle={{borderRadius: 16}}>
          <Text style={styles.nama_latin}>{detail.nama_latin}</Text>
          <Text style={styles.sub_latin}>
            {detail.jumlah_ayat} Ayat | {detail.tempat_turun}
          </Text>
          <Text style={styles.nama}>{detail.nama}</Text>
        </ImageBackground>
        {detail.nomor !== 1 && (
          <View style={{marginTop: 15}}>
            <Text style={styles.bismillah}>
              بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
            </Text>
            <Text style={styles.bismillahTr}>
              Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.
            </Text>
          </View>
        )}
        <FlatList
          scrollEnabled={false}
          data={detail.ayat}
          renderItem={({item}) => (
            <View style={styles.ayatItem}>
              <Text style={styles.ayatArabic}>{item.ar}</Text>
              <Text style={styles.ayatTranslation}>{item.idn}</Text>
            </View>
          )}
        />
        <View style={{backgroundColor: 'white', height: 120}}></View>
      </ScrollView>
      <TouchableOpacity style={styles.prev} onPress={pauseSound}>
        <IonIcons name="arrow-undo" size={25} color="white" />
      </TouchableOpacity>
      {isPlaying ? (
        <TouchableOpacity style={styles.play} onPress={pauseSound}>
          <IonIcons name="pause" size={35} color="white" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.play} onPress={playSound}>
          <IonIcons name="play" size={35} color="white" />
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.next} onPress={pauseSound}>
        <IonIcons name="arrow-redo" size={25} color="white" />
      </TouchableOpacity>
    </>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  headerHome: {
    backgroundColor: 'purple',
    borderRadius: 30,
    marginTop: 20,
    padding: 10,
  },
  nama: {
    color: 'white',
    fontSize: 55,
    textAlign: 'center',
  },
  nama_latin: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'YsabeauInfant-Regular',
  },
  sub_latin: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'YsabeauInfant-Regular',
  },
  play: {
    position: 'absolute',
    bottom: '5%',
    padding: 13,
    right: '41.5%',
    backgroundColor: 'purple',
    borderRadius: 50,
  },
  next: {
    position: 'absolute',
    bottom: '5%',
    padding: 10,
    right: '25%',
    backgroundColor: 'purple',
    borderRadius: 50,
  },
  prev: {
    position: 'absolute',
    bottom: '5%',
    padding: 10,
    left: '25%',
    backgroundColor: 'purple',
    borderRadius: 50,
  },
  ayatItem: {
    padding: 5,
    marginTop: 20,
    borderRadius: 15,
    borderBottomWidth: 0.4,
  },
  ayatArabic: {
    fontSize: 30,
    padding: 5,
  },
  bismillah: {
    fontSize: 30,
    padding: 5,
    marginTop: 5,
  },
  ayatTranslation: {
    padding: 10,
    fontStyle: 'italic',
    fontFamily: 'YsabeauInfant-Regular',
  },
  bismillahTr: {
    padding: 10,
    fontStyle: 'italic',
    fontFamily: 'YsabeauInfant-Regular',
    borderBottomWidth: 0.4,
  },

  flatList: {
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
});
