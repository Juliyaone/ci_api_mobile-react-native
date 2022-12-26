import Navigation from './src/components/Navigation';
import {AuchProvider} from './src/context/AuchContext';
import {Provider} from "react-redux";
import {Store} from "./src/redux/store";

function App() {
    return (
        <Provider store={Store}>
            {/*<AuchProvider>*/}
                <Navigation/>
            {/*</AuchProvider>*/}
        </Provider>
    )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
export default App;
