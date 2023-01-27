import 'react-native-gesture-handler'; // для аниамции бокового меню

import React from "react";
import {Provider} from "react-redux";

import { AuthProvider } from "./src/auth/AuthContext";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './src/redux/store';
import AppNav from "./src/components/navigation/AppNav";

import { useFonts } from 'expo-font';

import store from "./src/redux/store";
import 'expo-dev-menu';



function App() {

	const [fontsLoaded] = useFonts({
		Evolventa: require("./assets/fonts/Evolventa-Regular.otf"),
	});

	if (fontsLoaded) {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AuthProvider>
							<AppNav/>
					</AuthProvider >
				</PersistGate>
			</Provider>
		);
	}
}

export default App;

