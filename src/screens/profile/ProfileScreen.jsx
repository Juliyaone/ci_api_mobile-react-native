import React, { useId, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useGetMeQuery, useCheckFirstEntryQuery} from "../../redux/usersApi";
import Loader from "../../components/loader/Loader";



const globalStyles = require("../globalStyles");

import AvatarPreview from "../../img/icons/avatar.svg";
import PhotoIcon from "../../img/icons/photo.svg";
import Ellipse from "../../img/icons/ellipse.svg";
import CreditCard from "../../img/icons/credit-card.svg";

import Header from '../../components/header/Header';


import NewUserModal from "../modal/NewUserModal";
import ExpiredUserModal from "../modal/ExpiredUserModal";
import ChangeUserMoodModal from "../modal/ChangeUserMoodModal";


function ProfileScreen({rate, mood, avatar}) {
    const navigation = useNavigation();

    const {data: user, error: userError, isLoading: userLoading } = useGetMeQuery();


    const {
        data,
        isLoading
    } = useCheckFirstEntryQuery()


    if (isLoading) {
        return <Loader/>
    }


    const {emojies, hello_video, new_user, is_expired, today_first_entry} = data;
  console.log(user);


  return (
    <SafeAreaView style={globalStyles.container}>
			<ScrollView>

          <Header/>

            {(user && new_user && hello_video) ?
             <NewUserModal user={user} hello_video={hello_video}/>
            :
            null
            }

            {(user && is_expired) ?
              <ExpiredUserModal user={user} is_expired={is_expired}/>
            :
            null
            }

            {(user && today_first_entry && emojies) ?
             <ChangeUserMoodModal user={user} emojies={emojies}/>
             :
             null}
          <View style={styles.boxWhite}>
            <View style={styles.rowBetfween}>
              <View style={styles.boxRelaive}>
                
                    {(avatar) ?
                      <AvatarPreview style={styles.avatarIcon}/>
                      : 
                      <AvatarPreview style={styles.avatarIcon}/>
                    }
                    

                  <View style={styles.boxPhoto}>
                    <PhotoIcon/>
                  </View>
              </View>

              <View>
                <Text>{user.username}{user.last_name}</Text>
                <Text>{user.phone}</Text>
                <Text>{(mood) ? 'Ваше настроение сегодня' + user.mood : ""}</Text>

              </View>
            </View>

            <View>
              <TouchableOpacity style={globalStyles.btnRed}
                onPress={()=> {navigation.navigate("ProfileEdit")}}
              >
                <Text style={globalStyles.textWhite}>Редактировать профиль</Text>
              </TouchableOpacity>
            </View>

          </View>

          <View style={styles.row}>

            <View style={[styles.boxRelaive, styles.boxWhite]}>
              <Text style={globalStyles.textBlack}>Ваш прогресс</Text>
                <Ellipse style={styles.ellipseAbsolute}/>
                <View style={styles.levelAbsolute}>
                  <Text>{user.level}</Text>
                  <Text>/10</Text>
                </View>
            </View>

            <View style={styles.boxTarrifs}>
                <View style={styles.row}>
                  <CreditCard/>
                  <Text style={globalStyles.textWhite}>Ваш тариф: {(rate) ? rate.name : ""}</Text>
                </View>
                <Text style={globalStyles.textWhite}>Подписка автоматически продлится: ВЫВЕСТИ ДАТУ</Text>
                <TouchableOpacity style={globalStyles.btnBorder}>
                  <Text style={globalStyles.textRed} onPress={()=> {navigation.navigate("Subscribe")}}
                  >Подробнее</Text>
                </TouchableOpacity>
            </View>
          </View>

      </ScrollView>
    </SafeAreaView>
  );

  }


const styles = StyleSheet.create({
  boxWhite : {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 40,
    marginBottom: 30
  },
  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  rowBetfween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30
  },
  boxRelaive: {
    position: "relative",
    zIndex: 1
  },
  avatarIcon: {
    width: 80,
    height: 80,
  },
  boxPhoto: {
    position: 'absolute',
    bottom: -20,
    right: -20,
    backgroundColor: '#D32A1E',
    padding: 5,
    borderRadius: 50,
    zIndex: 2,
  },
  boxTarrifs: {
    alignItems: 'center',
    width: '50%',
    backgroundColor: '#D32A1E',
    borderRadius: 40,
    padding: 20,
    marginBottom: 30,
  },
  levelAbsolute : {
    position: 'absolute',
    top: '50%',
    left: '50%',
    backgroundColor: 'transparent',
    padding: 5,
    borderRadius: 50,
    zIndex: 2,
  },
  ellipseAbsolute: {
    top: '15%',
  }
})

export default ProfileScreen;