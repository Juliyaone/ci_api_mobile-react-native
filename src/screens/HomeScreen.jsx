import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Logo from "../assets/img/icons/logo.svg";

function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>
				<Logo style={styles.logo} width={120} height={120} />;
			</Text>
			<TouchableOpacity
				style={styles.btn}
				onPress={() => {
					navigation.navigate("Registration");
				}}
			>
				<Text style={styles.link}>Зарегистрироваться</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.btn}
				onPress={() => {
					navigation.navigate("Login");
				}}
			>
				<Text style={styles.link}>Войти</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	link: {
		textAlign: "center",
		color: "#ffffff",
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	logo: {
		width: "100px",
		height: "100px",
	},
	btn: {
		width: "100%",
		height: 70,
		backgroundColor: "#d73428",
		marginBottom: 20,
	},
});

export default HomeScreen;
