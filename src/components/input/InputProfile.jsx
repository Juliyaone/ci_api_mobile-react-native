import React from 'react';
import { View, TextInput } from 'react-native';
import ProfileIcon from "../../img/icons/profile";
const globalStyles = require("../../screens/globalStyles");



function InputProfile({namePlaceholder, keyId, name, onChangeUsername}) {

  return (
    <View style={globalStyles.boxInput}>

      <ProfileIcon
        style={globalStyles.inputIcon}
        width={20}
        height={20}
      />


      <TextInput key={keyId}
        style={globalStyles.inputBorder}
        value={name}
        autoFocus
        placeholder={namePlaceholder}
        onChangeText={onChangeUsername}
      />
    </View>
  );
}

export default InputProfile;