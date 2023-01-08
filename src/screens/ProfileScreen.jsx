import React, { useId } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import {useSelector, useDispatch} from "react-redux";
import {deleteTokenFromStorage} from "../auth/tokenStorage";

const globalStyles = require("../screens/globalStyles");

import AvatarPreview from "../img/icons/avatar.svg";
import MenuIcon from "../img/icons/menu.svg";
import PhotoIcon from "../img/icons/photo.svg";
import Ellipse from "../img/icons/ellipse.svg";
import CreditCard from "../img/icons/credit-card.svg";




function ProfileScreen({navigation}) {

    const user = useSelector(store => store.userReducer);
    const dispatch = useDispatch()
    const keyId = useId();

    console.log(user);
    const phone = user.phone;
    const password = user.password;

    // Отправляет что токен удален при выходе
    const sendLogoutData = () => {
        dispatch(deleteTokenFromStorage({phone,password}));
        navigation.navigate('Home');
    }

  return (
    <SafeAreaView style={globalStyles.container}>
			<ScrollView>
          <View style={styles.row}>
            <MenuIcon />
            <AvatarPreview/>
          </View>



          <View style={styles.boxWhite}>
            <View style={styles.rowBetfween}>
              <View style={styles.boxRelaive}>
                <AvatarPreview style={styles.avatarIcon}/>
                  <View style={styles.boxPhoto}>
                    <PhotoIcon/>
                  </View>
              </View>

              <View>
                <Text>{user.username}{user.last_name}</Text>
                <Text>{user.phone}</Text>
              </View>
            </View>

            <View>
              <TouchableOpacity onPress={()=> {
                navigation.navigate('PrifileEdit');
              }}style={globalStyles.btnRed}>
                <Text style={globalStyles.textWhite}>Редектировать профиль</Text>
              </TouchableOpacity>
            </View>

          </View>

          <View style={styles.row}>

            <View style={[styles.boxRelaive, styles.boxWhite]}>
              <Text style={globalStyles.textBlack}>Ваш прогресс</Text>
                <Ellipse style={styles.ellipseAbsolute}/>
                <View style={styles.levelAbsolute}>
                  <Text>{user.level}/10</Text>
                </View>
            </View>

            <View style={styles.boxTarrifs}>
                <View style={styles.row}>
                  <CreditCard/>
                  <Text style={globalStyles.textWhite}>Ваш тариф: ВЫВЕСТИ ТАРИФ</Text>
                </View>
                <Text style={globalStyles.textWhite}>Подписка автоматически продлится: ВЫВЕСТИ ДАТУ</Text>
                <TouchableOpacity style={globalStyles.btnBorder}>
                  <Text style={globalStyles.textRed}>Подробнее</Text>
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
