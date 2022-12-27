import React from 'react';
import { View, Text } from 'react-native';
import {useSelector} from "react-redux";

function ProfileScreen(props) {

    const user = useSelector(store => store.userReducer)

  return (
    <View>
      <Text>{user.username}</Text>
      <Text>{user.last_name}</Text>
      <Text>{user.third_name}</Text>
      <Text>{user.email}</Text>
      <Text>{user.phone}</Text>
    </View>
  );
}

export default ProfileScreen;
