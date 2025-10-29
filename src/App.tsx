import './App.css'
import {Route, Routes} from "react-router-dom";
import {Projects} from "./Components/Projects.tsx";
import {Contacts} from "./Components/Contacts.tsx";
import {Skills} from "./Components/Skills.tsx";
import {Main} from "./Components/Main.tsx";


function App() {


    return (
        <>
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/Skills" element={<Skills/>}></Route>
                <Route path="/Contacts" element={<Contacts/>}></Route>
                <Route path="/Projects" element={<Projects/>}></Route>
            </Routes>
        </>
    )
}

export default App
