import { useFetch } from "../../hooks"
import { Champion, Data } from "../../interfaces"
import { fondoStarW, LeagueLogo } from "../../assets"
import { Button, Card, Seccion, SocialMedia, VideoPreview } from "../../Components/"
import { linksSocial } from "../../../public/DatosPrueba/Links"

import './Inicio.css'


export const Inicio = () => {
    const { data: data1, error: error1, isLoading: isLoading1 } = useFetch<Data>('https://ddragon.leagueoflegends.com/cdn/15.2.1/data/es_AR/champion/Rengar.json');
    const { data: data2, error: error2, isLoading: isLoading2 } = useFetch<Data>('https://ddragon.leagueoflegends.com/cdn/15.2.1/data/es_AR/champion/Aurora.json');
    const { data: data3, error: error3, isLoading: isLoading3 } = useFetch<Data>('https://ddragon.leagueoflegends.com/cdn/15.2.1/data/es_AR/champion/Kayn.json');

    const ChampEj1: Champion | undefined = data1 ? Object.values(data1.data)[0] : undefined;
    const ChampEj2: Champion | undefined = data2 ? Object.values(data2.data)[0] : undefined;
    const ChampEj3: Champion | undefined = data3 ? Object.values(data3.data)[0] : undefined;

    return (
        <div id="Inicio">
            <Seccion fondo={fondoStarW}>
                <img src={LeagueLogo} />
                <p>Explorá todo sobre tus campeones favoritos: sus habilidades, skins, historias y mucho más.
                    Sumergite en la Grieta del Invocador, conocé cada rol, estrategia y
                    misterio que hace de LoL un universo tan emocionante.</p>
                <div id="Video">
                    <VideoPreview video={'https://www.youtube.com/watch?v=uLJx5_aw0x0'} />
                </div>
            </Seccion>

            <Seccion >  
                <p>Descubrí la lista completa de campeones, cada uno con habilidades únicas y roles específicos.</p>
                <Button label="Ver Campeones" parentMethod={() => window.location.href = '/champs'} />
            </Seccion>

            <Seccion titulo="Pagina Oficial" fondo={fondoStarW}>
                <p>Para más información, noticias y eventos, visitá la página oficial de League of Legends.</p>
                <Button label="Visitar" parentMethod={() => window.open('https://www.leagueoflegends.com/es-es/', '_blank')} />
                {/*Redes sociales oficiales*/}
                <SocialMedia linksSocial={linksSocial} />
            </Seccion>
        </div>
    )
}