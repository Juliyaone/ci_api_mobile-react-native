import React from "react";
import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingTop: "5%",
		paddingBottom: "10%",
		marginLeft: 20,
		marginRight: 20
	},
	scrollView: {
		width: "100%",
		flex: 1,
	},
	box: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "90%",
	},
	logoBox: {
		justifyContent: "center",
		alignItems: "center",
	},
	logo: {
		width: "100px",
		height: "100px",
		textAlign: "center",
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
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: 20,
		marginBottom: 20,
	},
	btnRose: {
		width: "90%",
		height: 55,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f7cdcb",
		borderRadius: 40,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: 20,
		marginBottom: 20,
	},
	btnBorder: {
		width: "90%",
		height: 55,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ffffff",
		borderWidth: 1,
		borderColor: "#D32A1E",
		borderStyle: "solid",
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 10,
		paddingLeft: 10,
		borderRadius: 40,
		marginBottom: 20,
	},
	textWhite: {
		textAlign: "center",
		color: "#ffffff",
		fontFamily: "Evolventa",
		fontWeight: "600",
		fontSize: 16,
	},
	textRed: {
		textAlign: "center",
		fontFamily: "Evolventa",
		color: "#EB5E54",
		fontWeight: "600",
		fontSize: 16,
	},
	textError: {
		textAlign: "center",
		fontFamily: "Evolventa",
		color: "#EB5E54",
		fontWeight: "600",
		fontSize: 14,
		marginBottom: 10
	},
	textBlack: {
		textAlign: "center",
		fontFamily: "Evolventa",
		color: "#111111",
		fontWeight: "600",
		fontSize: 16,
	},
	boxInput: {
		flex: 1,
		flexDirection: "row",
		zIndex: 1,
	},

	inputIcon: {
		position: "absolute",
		top: "25%",
		left: "5%",
		zIndex: 2,
	},

	inputIconRight: {
		position: "absolute",
		top: "25%",
		right: "5%",
		zIndex: 2,
	},

	inputBorder: {
		width: "90%",
		height: 55,
		justifyContent: "center",
		alignItems: "center",
		fontSize: 16,
		backgroundColor: "#ffffff",
		borderWidth: 1,
		borderColor: "#D32A1E",
		borderStyle: "solid",
		borderRadius: 40,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: "15%",
		marginBottom: 10,
	},
	radioForm: {
		borderRadius: 20,
	},
});