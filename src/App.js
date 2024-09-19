import { Provider } from "react-redux";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import { store } from "./store/store.js";

function App() {
    return (
        <Provider store={store}>
            <ThemeToggle />
        </Provider>
    );
}

export default App;
