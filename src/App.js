import { useSelector } from "react-redux";

import LoginScreen from "./components/screens/AuthScreen";
import HomeScreen from "./components/screens/HomeScreen";

function App() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  return <>{isAuthenticated ? <HomeScreen /> : <LoginScreen />}</>;
}

export default App;
