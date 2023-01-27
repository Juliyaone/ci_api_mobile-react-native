import React from 'react';
import { TextInput } from 'react-native';
const globalStyles = require("../../screens/globalStyles");

function InputSms({namePlaceholder, keyId, onChangeText, code}) {
  return (
      <TextInput key={keyId}
        style={globalStyles.inputBorder}
        value={code}
        placeholder={namePlaceholder}
        onChangeText={onChangeText}
        keyboardType="numeric"
      />
  );
}

export default InputSms;