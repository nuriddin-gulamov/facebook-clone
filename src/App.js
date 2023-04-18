import { useState } from "react";

import LoginScreen from "./components/screens/AuthScreen";
import HomeScreen from "./components/screens/HomeScreen";

function App() {
  // eslint-disable-next-line
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return <>{isAuthenticated ? <HomeScreen /> : <LoginScreen />}</>;
}

export default App;
