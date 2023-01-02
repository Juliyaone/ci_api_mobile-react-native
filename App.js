import Navigation from "./src/components/Navigation";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

function App() {
	const [fontsLoaded] = useFonts({
		Evolventa: require("./assets/fonts/Evolventa-Regular.otf"),
	});

	if (fontsLoaded) {
		return (
			<Provider store={Store}>
					<Navigation />
			</Provider>
		);
	};
}

export default App;
