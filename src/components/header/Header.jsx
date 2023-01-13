import React from 'react';
import {StyleSheet, View, TouchableOpacity, SafeAreaView} from "react-native";
const globalStyles = require("../../screens/globalStyles");


import AvatarPreview from "../../img/icons/avatar.svg";
import MenuIcon from "../../img/icons/menu.svg";



function Header({navigation}) {
  return (
    <SafeAreaView style={globalStyles.container}>

        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
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
    alignItems: 'space-between',
    justifyContent: 'space-between',
    marginBottom: 40,
  }
})

export default Header;