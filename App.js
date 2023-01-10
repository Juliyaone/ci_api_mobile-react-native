import 'react-native-gesture-handler';

import React, {useContext} from "react";
import { AuthProvider, AuthContext } from "./src/auth/AuthContext"

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthStack from "./src/components/navigation/AuthStack";
import AppStack from "./src/components/navigation/AppStack";


import { useFonts } from 'expo-font';
import {Store} from "./src/redux/store";
import {Provider} from "react-redux";



function App() {

	const { userToken } = useContext(AuthContext);

	const [fontsLoaded] = useFonts({
		Evolventa: require("./assets/fonts/Evolventa-Regular.otf"),
	});
	if (fontsLoaded) {
		return (
			<Provider store={Store}>
				<AuthProvider>
					<NavigationContainer>
	 				{(userToken !== null) ?
						<AppStack />
						:
						<AuthStack />
					}
					</NavigationContainer>
				</AuthProvider >
			</Provider>
		);
	}
}

export default App;

