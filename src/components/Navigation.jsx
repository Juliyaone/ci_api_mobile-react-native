import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from '../screens/RegistrationScreen';
import VerificationScreen from "../screens/VerificationSmsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { AuthContextProvider } from "../auth/AuthContext"

const Stack = createNativeStackNavigator();

function Navigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Profile" component={ProfileScreen} />
					<Stack.Screen name="Login" component={LoginScreen} />
					<Stack.Screen name="Registration" component={RegistrationScreen} />
					<Stack.Screen name="Verification" component={VerificationScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Navigation;
