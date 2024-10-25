import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import AuthScreen from "./components/screens/AuthScreen";
import HomeScreen from "./components/screens/HomeScreen";

function App() {
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const darkModeOn = useSelector((state) => state.darkModeOn);

    const dispatcher = useDispatch();

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const changeHandler = e => {
            if (e.matches && !darkModeOn) dispatcher({ type: "TOGGLE_DARK_MODE" });
            else if (!e.matches && darkModeOn) dispatcher({ type: "TOGGLE_DARK_MODE" });
        }
        mediaQuery.addEventListener('change', changeHandler);

        return () => window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', changeHandler);
    }, [dispatcher, darkModeOn]);

    return <div className={darkModeOn ? "dark" : null}>{isAuthenticated ? <HomeScreen /> : <AuthScreen />}</div>;
}

export default App;
