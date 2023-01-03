import React from "react";
import {TouchableOpacity, Text} from "react-native";

const globalStyles = require("../../screens/globalStyles");

function ButtonReg({text, keyId, sendDataFunction}) {
  return (
			<TouchableOpacity key={keyId}
					onPress={sendDataFunction}
					style={globalStyles.btnRed}
				>
					<Text style={globalStyles.textWhite}>{text}</Text>
			</TouchableOpacity>
  );
}

export default ButtonReg;