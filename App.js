

import Navigation from './src/components/Navigation';
import { AuchProvider } from './src/context/AuchContext';


function App() {
  return (
    <AuchProvider>
      <Navigation/>
    </AuchProvider>
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