import { Button, Card } from "../../Components"
import VideoPreview from "../../Components/ObjectsExample/VideoPreview"
import { Seccion } from "../../Components/Seccion/Seccion"
import { useFetch } from "../../hooks"
import { Champion, Data } from "../../interfaces"
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
            <div id="Titulo">
                <h1>League of Legends</h1>
            </div>
            <Seccion titulo="¡Bienvenid@ al mundo de League of Legends!">
                <p>Explorá todo sobre tus campeones favoritos: sus habilidades, skins, historias y mucho más.
                    Sumergite en la Grieta del Invocador, conocé cada rol, estrategia y misterio que hace de LoL un universo tan emocionante.</p>
            </Seccion>
            <div id="Video">
                <VideoPreview video={'https://www.youtube.com/watch?v=uLJx5_aw0x0'} />
            </div>
            <Seccion titulo="Campeones">
                <div id="Galeria">
                    {
                        ChampEj1 && ChampEj2 && ChampEj3 ? (
                            <>
                                <Card Champ={ChampEj1} type="inicio-card" showBtn={false} />
                                <Card Champ={ChampEj2} type="inicio-card" showBtn={false} />
                                <Card Champ={ChampEj3} type="inicio-card" showBtn={false} />
                            </>
                        ) : (
                            <h3>Cargando campeones...</h3>
                        )
                    }
                    <p>Descubrí la lista completa de campeones, cada uno con habilidades únicas y roles específicos.</p>
                    <Button label="Ver Campeones" parentMethod={() => window.location.href = '/champs'} />
                </div>
            </Seccion>

            <Seccion titulo="Pagina Oficial">
                <p>Para más información, noticias y eventos, visitá la página oficial de League of Legends.</p>
                <a href="https://www.leagueoflegends.com/es-es/" target="_blank" rel="noopener noreferrer">Juega AQUI</a>
                {/*Redes sociales oficiales*/}

                <Seccion titulo="Redes Sociales">
                    <p>Seguí a League of Legends en sus redes sociales para estar al tanto de todas las novedades.</p>
                    <div id="RedesSocialesLinks">
                        <a href="https://twitter.com/LeagueOfLegends" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://www.facebook.com/LeagueOfLegends" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.instagram.com/leagueoflegends/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </Seccion>
            </Seccion>
        </div>
    )
}