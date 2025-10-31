import './App.css'
import {Route, Routes} from "react-router-dom";
import {Projects} from "./Components/Projects.tsx";
import {Contacts} from "./Components/Contacts.tsx";
import {Skills} from "./Components/Skills.tsx";
import {Main} from "./Components/Main.tsx";
import {useLocalStorage} from "./hooks/useLocalStorage.ts";
import { Context } from './contexts/Context.ts';
import {useEffect} from "react";
import {TypewriterEffectDemo} from "./Components/Type.tsx";





function App() {

    const [theme, setTheme] = useLocalStorage("theme", "light");

    const themeHandler = () => {
        setTheme(theme === "light"? "dark" : "light")

    }
    useEffect(() => {
        document.body.className = theme
    }, [theme])

    return (
        <>
            <Context.Provider value={{themeHandler, theme}}>
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/Skills" element={<Skills/>}></Route>
                <Route path="/Contacts" element={<Contacts/>}></Route>
                <Route path="/Projects" element={<Projects/>}></Route>
            </Routes>
                <TypewriterEffectDemo></TypewriterEffectDemo>
            </Context.Provider>
        </>

    )
}

export default App
