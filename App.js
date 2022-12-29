import Navigation from "./src/components/Navigation";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";
import { AuchProvider } from "./src/context/AuchContext";

function App() {
	return (
		<Provider store={Store}>
			<AuchProvider>
				<Navigation />
			</AuchProvider>
		</Provider>
	);
}

export default App;
