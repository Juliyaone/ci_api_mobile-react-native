import React, { useId } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import {useSelector, useDispatch} from "react-redux";



const globalStyles = require("../screens/globalStyles");

import AvatarPreview from "../img/icons/avatar.svg";
import MenuIcon from "../img/icons/menu.svg";
import PhotoIcon from "../img/icons/photo.svg";
import Ellipse from "../img/icons/ellipse.svg";
import CreditCard from "../img/icons/credit-card.svg";

// import PrifileEdit from "../../screens/PrifileEditScreen";


function ProfileScreen({navigation}) {

  const user = useSelector(store => store.userReducer);

  console.log(user);

  return (
    <SafeAreaView style={globalStyles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.row}>
            <TouchableOpacity onPress={()=> navigation.openDrawer()}>
              <MenuIcon />
            </TouchableOpacity>
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
              <TouchableOpacity style={globalStyles.btnRed} onPress={()=> {
                navigation.navigate("ProfileEdit", { username: user.username, last_name: user.last_name, third_name: user.third_name, phone: user.phone, email: user.email })
              }}
              >
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
                  <Text style={globalStyles.textRed}
                  onPress={()=> {
                navigation.navigate("Subscribe")
              }}
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
