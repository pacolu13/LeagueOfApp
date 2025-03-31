import { Link, useParams } from "react-router-dom"
import { useFetch } from "../../hooks";
import { API_ROUTES } from "../../api";
import { Champion, DataChampion, Skin } from "../../interfaces";
import { Galeria } from "../../Components/Galeria/Galeria";
import { ChampionDetails } from "../../Components";
import "./ChampSpecifies.css"


export const ChampSpecifies = () => {
    const { champName } = useParams()
    const { data, error, isLoading } = useFetch<DataChampion>(`${API_ROUTES.champ}${champName}.json`);

    if (champName === undefined || data === null) return null;

    const champion: Champion = data.data[champName];
    const skins: Skin[] = Array.isArray(champion.skins) ? champion.skins : [];
    const images: Skin[] = skins.map(skin => ({
        id: skin.id,
        num: skin.num,
        name: skin.name,
        chromas: skin.chromas,
        image: `${API_ROUTES.CHAMP_SPLASHART_URL}${champion.id}_${skin.num}.jpg`
    }));

    return (
        <div className="champion-specifies">
            <Link to={'/Inicio'}>Inicio</Link>
            <ChampionDetails campeon={champion} />
            <Galeria skins={images} />
        </div>
    )
}
