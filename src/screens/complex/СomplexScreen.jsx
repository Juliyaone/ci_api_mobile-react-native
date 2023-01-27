import React, {useId} from 'react';
import {StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {useGetComplexesQuery} from "../../redux/api";

import Swiper from 'react-native-swiper';

import Loader from "../../components/loader/Loader";
import Header from '../../components/header/Header';

import globalStyles from "../globalStyles";

import BgIconComplex from '../../img/reg__bg-red.svg'


function СomplexScreen() {
  const navigation = useNavigation();
  const keyId = useId();

  const {
    data, 
    error: complexesError, 
    isLoading: complexesLoading
  } = useGetComplexesQuery();

    if ( complexesLoading ) {
        return <Loader/>
    }

    let messageText;

    if (complexesError) {
        messageText = complexesError.data?.detail
    }

  const {user, viewed_complexes, not_viewed_complexes, today_complex} = data;

  return (
     <SafeAreaView style={globalStyles.container}>
      <Header/>
        <Swiper
          showsButtons={true}
          loop={true}
        >
          {not_viewed_complexes.map((item) => (
              <View key={keyId} style={styles.slide}>
                <Text style={styles.text}>{item.description}</Text>
                <Text style={styles.text}>{item.duration}мин</Text>
                <BgIconComplex style={styles.bgImage}/>

                <TouchableOpacity
                  onPress={
                    ()=>{navigation.navigate('VideosScreen', {complexID: item.id})
                  }}
                
                style={styles.btnComplex}
                >
                  <Text>Смотерть</Text></TouchableOpacity>
              </View>
          ))}
      </Swiper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  slide: {
    position: 'relative',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D32A1E',
    borderRadius: 40,
    marginBottom: 30,
    zIndex: 1,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  btnComplex: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '10%',
    backgroundColor: '#ffffff',
    borderRadius: 40,
    zIndex: 2,
  },
  bgImage: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain'
  }
  })

export default СomplexScreen;