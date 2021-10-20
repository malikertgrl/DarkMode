import React,
{
    useContext,
    createContext,
    useState,
    useMemo
} from "react";

const Themes = {
    lightTheme: {
        backgroundColor: "#ffff",
        color: "#000",
        borderBottomColor: "#000"
    },
    darkTheme: {
        backgroundColor: "#000",
        color: "#ffff",
        borderBottomColor: "#fff"

    }
}

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevState => !prevState)
    }
    const theme = useMemo(() => {
        return (isDarkMode ? Themes.darkTheme : Themes.lightTheme)
    }, [isDarkMode])

    const value = { toggleTheme, theme, isDarkMode }

    return (
        <ThemeContext.Provider value={value} >
            {children}
        </ThemeContext.Provider>
    )
}

// const useThemeContext = () => {
//     const context = useContext(ThemeContext)
//     return context;
// }

export { ThemeContext, ThemeProvider };