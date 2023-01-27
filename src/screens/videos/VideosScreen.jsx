import React, { useId } from 'react';

import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';

import Swiper from 'react-native-swiper';
import Header from '../../components/header/Header';

const globalStyles = require("../globalStyles");


function VideosScreen({videos}) {

    const keyId = useId();

    const renderSlidesVideos = (videos) => {
      return (videos.map((video, index) => (
      <View key={({keyId} + {index})} style={styles.slide}>
          <Text>{video.name}{video.description}</Text>
      </View>
      )));
    }


    return (
     <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <Header/> 
        <Swiper
          showsButtons={true}
          loop={true}>

          {renderSlidesVideos(videos)}

        </Swiper>
      </ScrollView>
    </SafeAreaView>
    )
};

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
  }
})

export default VideosScreen;
