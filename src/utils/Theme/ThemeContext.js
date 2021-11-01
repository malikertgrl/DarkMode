import React,
{
    useContext,
    createContext,
    useState,
    useMemo
} from "react";
import { useCallback } from "react";

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
    const [isLogin, setIsLogin] = useState(false);

    const toggleLogin = () => {
        return (
            setIsLogin(prevState => !prevState)
        )
    }

    const toggleTheme = () => {
        console.log("toogleTheme");
        setIsDarkMode(prevState => !prevState)
    }

    // const theme = useCallback(() => {
    //     console.log("useCAllback");
    //     return (isDarkMode ? Themes.darkTheme : Themes.lightTheme)
    // },
    //     [isDarkMode],
    // )

    const theme = useMemo(() => {
        console.log("tema değişti");
        return (isDarkMode ? Themes.darkTheme : Themes.lightTheme)
    }, [isDarkMode])

    const value = { toggleTheme, theme, isDarkMode, isLogin, toggleLogin }

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