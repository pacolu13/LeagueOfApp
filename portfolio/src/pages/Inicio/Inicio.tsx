import VideoPreview from "../../Components/ObjectsExample/VideoPreview"



export const Inicio = () => {

    return (
        <>
            <div id="Titutlo">
                <h1>League of Legends</h1>
            </div>
            <div id="Desc">
                <h4>¡Bienvenid@ al mundo de League of Legends!</h4>
                <p>Explorá todo sobre tus campeones favoritos: sus habilidades, skins, historias y mucho más.
                    Sumergite en la Grieta del Invocador, conocé cada rol, estrategia y misterio que hace de LoL un universo tan emocionante.</p>
            </div>
            <div id="Video">
                <VideoPreview video={'https://www.youtube.com/watch?v=uLJx5_aw0x0'} />
            </div>
            <div id="PagOficial">
                <a href="">Juega AQUI</a>
            </div>
        </>
    )
}