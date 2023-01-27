import 'react-native-gesture-handler'; // для аниамции бокового меню

import React from "react";
import {Provider} from "react-redux";

import { AuthProvider } from "./src/auth/AuthContext"

import AppNav from "./src/components/navigation/AppNav";

import { useFonts } from 'expo-font';

import {Store} from "./src/redux/store";
import 'expo-dev-menu';
// import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
// import { userApi } from './src/redux/api';



function App() {

	const [fontsLoaded] = useFonts({
		Evolventa: require("./assets/fonts/Evolventa-Regular.otf"),
	});

	if (fontsLoaded) {
		return (
			<Provider store={Store}>
				<AuthProvider>
					{/* <ApiProvider userApi={userApi}> */}
						<AppNav/>
					{/* </ApiProvider> */}
				</AuthProvider >
			</Provider>
		);
	}
}

export default App;

