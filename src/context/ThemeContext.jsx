import { createContext, useContext, useState } from "react";

//creo el contexto para guardar el estado del modo oscuro (true o false)
export const ThemeContext = createContext()

//creo el provider que dispone de esa info al componente que lo necesite
export const ThemeContextProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)
    const values = {darkMode, setDarkMode}
    return(
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}
//creo el hook para usar ese context y los valores que guarda
export const useThemeContext = () => {
    const context = useContext(ThemeContext)
    return context
}