import useLocalStorage from "./useLocalStorage";
import './lightDarkMode.css'

export default function LightDarkMode() {

    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
                <p>Hello world!</p>
                <button onClick={handleToggleTheme}>Switch theme</button>
            </div>
        </div>
    );
}