import React, { useState } from "react";
import {StyleSheet, View, TouchableOpacity, Text} from "react-native";

import OkIcon from "../../img/icons/ok.svg";
const globalStyles = require("../../screens/globalStyles");



function InputRadioGender({keyId, onChangeGender}) {

  const [checked, setChecked] = useState(0);

	const genderArr = ["Ж", "M"];


  return (
        <View>
					<View style={styles.boxRow}>

						<Text style={styles.btnRadioText}>Пол</Text>

						{genderArr.map((gender, index) => {
							return (
								<View key={`${keyId}-${index}`}>
									{checked == index ? (
										<View style={styles.btnBox}>
											<Text style={styles.btnRadioText}>{gender}</Text>

											<TouchableOpacity style={styles.btnRadio}
												onPress={() => {
													setChecked(index);
													onChangeGender(gender);
												}}
												>
													<OkIcon/>
											</TouchableOpacity>
										</View>
									) : (
										<View style={styles.btnBox}>
											<Text style={styles.btnRadioText}>{gender}</Text>

											<TouchableOpacity
												style={styles.btnRadio}
												onPress={() => {
													setChecked(index);
													onChangeGender(gender);
												}}
											>
											</TouchableOpacity>
										</View>
									)}
								</View>
							);
						})}
					</View>
				</View>      
  );
}

const styles = StyleSheet.create({
	boxRow: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flexStart",
		marginBottom: 30,
	},
	btnBox: {
		flexDirection: "row",
		alignItems: "center",
	},
	btnRadio: {
		justifyContent: "center",
		alignItems: "center",
		height: 40,
		width: 40,
		borderWidth: 1,
		borderColor: "#D32A1E",
		borderRadius: 50,
		flexDirection: "row",
		alignItems: "center",
		marginRight: 20,
	},
	btnRadioText: {
		textAlign: "center",
		fontFamily: "Evolventa",
		color: "#111111",
		fontWeight: "600",
		fontSize: 16,
		marginRight: 10
	},
	inputIconBtn: {
		width: '30%',
		height: '100%'
	}
});

export default InputRadioGender;