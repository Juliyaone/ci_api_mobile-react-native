import React, { useState } from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import LockIcon from "../../img/icons/lock.svg";
import EyeIcon from "../../img/icons/eye.svg";
import CloseEyeIcon from "../../img/icons/closeEye.svg";

const globalStyles = require("../../screens/globalStyles");


function InputPassword({namePlaceholder, keyId, password, onChangePassword}) {

  const [secure, setSecure] = useState(true);

  return (
			<View style={globalStyles.boxInput}>
					
					<LockIcon
						style={globalStyles.inputIcon}
						width={20}
						height={20}
					/>
					<TextInput
						style={globalStyles.inputBorder}
						value={password}
						placeholder={namePlaceholder}
						secureTextEntry={secure}
						onChangeText={onChangePassword}
					/>

					<TouchableOpacity key={keyId}
					style={globalStyles.inputIconRight}
						onPress={() => {
							setSecure(!secure)
						}}
					>		
						{secure === true ? (
								<EyeIcon
									width={20}
									height={20}
								/>
						)	: (
								<CloseEyeIcon
									width={20}
									height={20}
								/>
						)}

					</TouchableOpacity>
				</View>
  );
}

export default InputPassword;