import { Link, useParams } from "react-router-dom"
import { useFetch } from "../../hooks";
import { API_ROUTES } from "../../api";
import { DataChampion, Skin } from "../../interfaces";
import { Galeria } from "../../Components/Galeria/Galeria";


export const ChampSpecifies = () => {
    const { champName } = useParams()
    const { data, error, isLoading } = useFetch<DataChampion>(`${API_ROUTES.champ}${champName}.json`);

    if (champName === undefined || data === null) return null;

    const skins: Skin[] = Array.isArray(data.data[champName].skins) ? data.data[champName].skins : [];

    const images: Skin[] = skins.map(skin => ({
        id: skin.id,
        num: skin.num,
        name: skin.name,
        chromas: skin.chromas,
        image: `${API_ROUTES.splashArt}${data.data[champName].id}_${skin.num}.jpg`
    }));
    
    
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>ChampSpecifies</h1>
            <h2>{data.data[champName].id}</h2>
            <Link to={'/Inicio'}>Inicio</Link>
            <Galeria skins={images} />
        </div>
    )
}
