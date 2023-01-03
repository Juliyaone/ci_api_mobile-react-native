import React from 'react';
import { View, TextInput} from "react-native";
import EmailIcon from "../../img/icons/email.svg";


const globalStyles = require("../../screens/globalStyles");


function InputEmail({namePlaceholder, keyId, email, onChangeEmail}) {
  return (
  <View style={globalStyles.boxInput}>
					
					<EmailIcon 
						style={globalStyles.inputIcon}
						width={20}
						height={20}
					/>
					
					<TextInput key={keyId}
						style={globalStyles.inputBorder}
						value={email}
						email
						placeholder={namePlaceholder}
						onChangeText={onChangeEmail}
					/>
				</View>
  );
}

export default InputEmail;