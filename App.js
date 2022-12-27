import Navigation from './src/components/Navigation';
import {Provider} from "react-redux";
import {Store} from "./src/redux/store";

function App() {
    return (
        <Provider store={Store}>
            <Navigation/>
        </Provider>
    )
}

export default App;
