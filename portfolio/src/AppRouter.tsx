import { ChampSpecifies } from "./pages/ChampSpecifies/ChampSpecifies";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Footer, Header } from "./Components";

export const AppRouter = () => {
    return <>
        <Header title={""} links={[]} />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Inicio" element={<App />} />
                <Route path="/Champ/:champName" element={<ChampSpecifies />} />
            </Routes>
        </BrowserRouter>
        <Footer text={""} links={[]} />
    </>
}