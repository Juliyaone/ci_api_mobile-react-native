import React, {useId} from 'react';
import {StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper'
import {useGetVideosQuery} from "../../redux/api";
import Loader from "../../components/loader/Loader";
import Message, {ERROR_TYPE, SUCCESS_TYPE} from "../../message/Message";

import VideosScreen from './VideosScreen'




function VideosScreensContainer({route}) {

  const { complexID } = route.params;

  const {data, error: videosError, isLoading: videosLoading} = useGetVideosQuery(complexID);


    if ( videosLoading ) {
        return <Loader/>
    }

    let messageText;
    let messageType = ERROR_TYPE;


    if (videosError) {
        messageText = videosError.data?.detail
    }

  return (
    <>
      <SafeAreaView>
        <Message type={messageType} text={messageText}/>
      </SafeAreaView>

      <VideosScreen videos={data}/>
    </>
  );
}


export default VideosScreensContainer;