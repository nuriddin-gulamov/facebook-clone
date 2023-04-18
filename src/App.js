import { useState } from "react";

import LoginScreen from "./components/screens/auth/LoginScreen";
import HomeScreen from "./components/screens/home/HomeScreen";

function App() {
  // eslint-disable-next-line
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return <>{isAuthenticated ? <HomeScreen /> : <LoginScreen />}</>;
}

export default App;
