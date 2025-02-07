import { Link, useParams } from "react-router-dom"
import { useFetch } from "../../hooks";
import { API_ROUTES } from "../../api";
import { DataChampion } from "../../interfaces";

export const ChampSpecifies = () => {
    const { champName } = useParams()
    const { data, error, isLoading } = useFetch<DataChampion>(`${API_ROUTES.champ}${champName}.json`);

    if (champName === undefined || data === null) return null;


    return (
        <div style={{ textAlign: 'center' }}>
            <h1>ChampSpecifies</h1>
            <h2>{data.data[champName].id}</h2>
            <Link to={'/Inicio'}>Inicio</Link>
        </div>
    )
}