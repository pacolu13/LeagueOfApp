import { API_ROUTES } from "../../api"
import { Skin } from "../../interfaces"
import './Galeria.css'

interface Props{
    skins: Skin[],
    name: String
}

export const Galeria = ({skins, name}: Props) => {

    return (
        <div className="galeria">
            {skins.map((skin, index) => (
                <div key={index}>
                    <img src={`${API_ROUTES.splashArt}${name}_${skin.num}.jpg`} alt={skin.name}/>
                    <p>{skin.name}</p>
                </div>
            ))}
        </div>
    )
}
