import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import AvatarPreview from "../img/icons/avatar.svg";
import ExitSmall from '../img/icons/exit-small.svg';
import VkIcon from '../img/icons/vk.svg';
import YoutubeIcon from '../img/icons/youtube.svg';

import { deleteTokenFromStorage } from '../auth/tokenStorage';


const globalStyles = require("../screens/globalStyles");


function CustomDrawer(props) {
  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props}
      contentContainerStyle={{backgroundColor:'#ffffff'}}>
        <View style={{
          padding: 20,
          backgroundColor: '#D32A1E',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginBottom: 10
        }}>
          <AvatarPreview style={{marginRight: 20, width:'50', height: '50'}}/>
          <Text style={globalStyles.textWhite}>ИМЯ ЮЗЕРА</Text>
        </View>
        <View>
          <DrawerItemList {...props}></DrawerItemList>
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20}}>
        <TouchableOpacity onPress={() => {deleteTokenFromStorage()}}>
            <ExitSmall style={{marginRight: 10, width:'24', height: '24'}}/>
            <Text style={globalStyles.textBlack}>Выйти</Text>
        </TouchableOpacity>

        <View style={{padding: 20, flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
          <YoutubeIcon  style={{marginRight: 10}}/>
          <VkIcon/>
        </View>
      </View>
    </View>
  );
}

export default CustomDrawer;