import React from 'react';
import { View } from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import PhoneIcon from "../../img/icons/phone";
const globalStyles = require("../../screens/globalStyles");

function InputPhone({namePlaceholder, keyId, phone, onChangePhone}) {
  return (
    <View style={globalStyles.boxInput}>
        
      <PhoneIcon
        style={globalStyles.inputIcon}
        width={20}
        height={20}
      />
      
      <MaskedTextInput key={keyId}
        mask="+7(999)-999-99-99"
        style={globalStyles.inputBorder}
        value={phone}
        placeholder={namePlaceholder}
        onChangeText={onChangePhone}
        keyboardType="numeric"
      />

    </View>
  );
}

export default InputPhone;



