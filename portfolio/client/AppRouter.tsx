import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./Components";
import { linksHeader, linksFooter, mensajeFooter } from "./public/DatosPrueba/Links";
import { Champs, Inicio, Tienda, ChampSpecifies } from "./pages/index";

export const AppRouter = () => {
    return <>
        <Header title={"Proyecto Web"} links={linksHeader} />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Inicio" element={<Inicio />} />
                <Route path="/Champs" element={<Champs />} />
                <Route path="/Store" element={<Tienda />} />
                <Route path="/Champ/:champName" element={<ChampSpecifies />} />
            </Routes>
        </BrowserRouter>
        <Footer text={mensajeFooter} links={linksFooter} />
    </>
}