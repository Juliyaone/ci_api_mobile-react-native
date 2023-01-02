import React from "react";
const globalStyles = require("./globalStyles");

import {
	StyleSheet,
	Text,
	TouchableOpacity,
	SafeAreaView,
} from "react-native";

import Logo from "../img/icons/logo.svg";

function HomeScreen({ navigation }) {
	return (
		<SafeAreaView style={globalStyles.container}>
			<Text>
				<Logo style={styles.logo} width={120} height={120} />
			</Text>
			<Text style={styles.header}>Добро пожаловать!</Text>
			<TouchableOpacity
				style={globalStyles.btnRose}
				onPress={() => {
					navigation.navigate("Registration");
				}}
			>
				<Text style={globalStyles.textRed}>Зарегистрироваться</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={globalStyles.btnRed}
				onPress={() => {
					navigation.navigate("Login");
				}}
			>
				<Text style={globalStyles.textWhite}>Войти</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	logo: {
		width: "100px",
		height: "100px",
	},
	header: {
		fontFamily: "Evolventa",
		fontSize: 20,
		fontWeight: "700",
		marginBottom: 20,
		color: "#D32A1E",
	},
});

export default HomeScreen;
