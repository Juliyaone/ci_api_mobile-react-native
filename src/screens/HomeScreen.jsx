import React from "react";

import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	SafeAreaView,
} from "react-native";

import Logo from "../img/icons/logo.svg";

function HomeScreen({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Text>
				<Logo style={styles.logo} width={120} height={120} />;
			</Text>
			<Text style={styles.header}>Добро пожаловать!</Text>
			<TouchableOpacity
				style={styles.btnRose}
				onPress={() => {
					navigation.navigate("Registration");
				}}
			>
				<Text style={styles.linkRed}>Зарегистрироваться</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.btnRed}
				onPress={() => {
					navigation.navigate("Login");
				}}
			>
				<Text style={styles.linkWhite}>Войти</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
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
	btnRed: {
		width: "90%",
		height: 55,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#D32A1E",
		borderRadius: 40,
		marginBottom: 10,
	},
	btnRose: {
		width: "90%",
		height: 55,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f7cdcb",
		borderRadius: 40,
		marginBottom: 10,
	},
	linkWhite: {
		textAlign: "center",
		color: "#ffffff",
		fontFamily: "Evolventa",
		fontWeight: "600",
		fontSize: 16,
	},
	linkRed: {
		textAlign: "center",
		fontFamily: "Evolventa",
		color: "#EB5E54",
		fontWeight: "600",
		fontSize: 16,
	},
});

export default HomeScreen;
