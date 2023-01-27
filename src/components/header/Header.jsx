import React from 'react';
import {StyleSheet, View, TouchableOpacity, SafeAreaView} from "react-native";
const globalStyles = require("../../screens/globalStyles");


import AvatarPreview from "../../img/icons/avatar.svg";
import MenuIcon from "../../img/icons/menu.svg";

import { useNavigation } from '@react-navigation/native';


function Header() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.row}>

        <View style={styles.row}>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.openDrawer()}>
            <MenuIcon />
          </TouchableOpacity>
          <AvatarPreview/>
        </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
    width: '90%',
    maxHeight: 30,
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: 30
  },
  btn: {
    maxHeight: 30
  }
})

export default Header;