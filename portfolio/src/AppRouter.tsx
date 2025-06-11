import { ChampSpecifies } from "./pages/ChampSpecifies/ChampSpecifies";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/Champs/App";
import { Footer, Header } from "./Components";
import { linksHeader, linksFooter } from "../public/DatosPrueba/Links"

export const AppRouter = () => {
    return <>
        <Header title={"Proyecto Web"} links={linksHeader} />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Inicio" element={<App />} />
                <Route path="/Champ/:champName" element={<ChampSpecifies />} />
            </Routes>
        </BrowserRouter>
        <Footer text={"Footer"} links={linksFooter} />
    </>
}