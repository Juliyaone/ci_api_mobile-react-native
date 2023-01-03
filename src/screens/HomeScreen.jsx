import React from "react";

const globalStyles = require("../screens/globalStyles");


import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from "react-native";

import Logo from "../img/icons/logo.svg";

function HomeScreen({ navigation }) {

	return (
		
		<SafeAreaView style={globalStyles.container}>
			<Text>
				<Logo style={styles.logo} width={120} height={120} />
			</Text>
      <Text style={globalStyles.header}>Добро пожаловать!</Text>

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
	}
});

export default HomeScreen;
