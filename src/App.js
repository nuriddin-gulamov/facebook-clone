import { useSelector } from "react-redux";

import LoginScreen from "./components/screens/AuthScreen";
import HomeScreen from "./components/screens/HomeScreen";

function App() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const darkModeOn = useSelector((state) => state.darkModeOn);

  return <div className={darkModeOn ? "dark" : null}>{isAuthenticated ? <HomeScreen /> : <LoginScreen />}</div>;
}

export default App;
