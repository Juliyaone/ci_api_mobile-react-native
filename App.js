import { useCallback } from "react";

import Navigation from "./src/components/Navigation";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";
import { AuchProvider } from "./src/context/AuchContext";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

function App() {
  const [fontsLoaded] = useFonts({
		"Inter-Black": require("./assets/fonts/Evolventa-Regular.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
  }, [fontsLoaded]);

  if (!fontsLoaded) {
		return null;
  }

	return (
			<Provider store={Store}>
				<AuchProvider>
					<text style={{ fontFamily: "Evolventa", fontSize: 30 }}>nhfnfnf</text>
					<Navigation/>
				</AuchProvider>
			</Provider>
	);
}

export default App;
