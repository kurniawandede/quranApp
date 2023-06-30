/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';

const Topbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>iQuran</Text>
      <TouchableOpacity onPress={() => setShowSearch(true)}>
        {!showSearch && <IonIcons name="search" size={28} color="purple" />}
      </TouchableOpacity>
      {showSearch && (
        <>
          <TextInput style={styles.search} placeholder="Cari disini..." />
          <TouchableOpacity
            onPress={() => setShowSearch(false)}
            style={{position: 'absolute', right: 25}}>
            <IonIcons name="search" size={25} color="purple" />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Topbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  brand: {
    color: 'purple',
    fontSize: 30,
    fontFamily: 'PTSansNarrow-Bold',
  },
  search: {
    borderWidth: 1,
    borderColor: 'purple',
    width: '65%',
    height: '80%',
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 10,
    position: 'relative',
  },
});
