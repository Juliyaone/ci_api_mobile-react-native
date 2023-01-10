import 'react-native-gesture-handler'; // для аниамции бокового меню

import React from "react";
import {Provider} from "react-redux";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthProvider } from "./src/auth/AuthContext"

import AppNav from "./src/components/navigation/AppNav";

import { useFonts } from 'expo-font';

import {Store} from "./src/redux/store";



function App() {

	const [fontsLoaded] = useFonts({
		Evolventa: require("./assets/fonts/Evolventa-Regular.otf"),
	});

	if (fontsLoaded) {
		return (
			<Provider store={Store}>
				<AuthProvider>
					<AppNav/>
				</AuthProvider >
			</Provider>
		);
	}
}

export default App;

