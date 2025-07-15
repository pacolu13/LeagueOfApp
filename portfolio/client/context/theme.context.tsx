import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ThemeContextType {
    theme: string,
    toggleTheme: () => void
}

const principalTheme: string = 'light'

export const ThemeContext = createContext<ThemeContextType>({
    theme: principalTheme,
    toggleTheme: () => { }
})

interface ThemeProps {
    children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProps) => {
    const [theme, setTheme] = useState<string>(
        localStorage.getItem("theme") || principalTheme
    );

    //-------------------------------------------------------------------------------------------
    
    // Guardar en localStorage para persistencia
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme); // Cambia la clase del HTML
    }, [theme]);

    // Alternar entre light y dark
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    //-------------------------------------------------------------------------------------------

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider')
    }
    return context
}
