import { Champion } from "../../interfaces/champion"
import { ImageCard } from "./ImageCard"
import './Card.css'
import { Button } from "../Button/Button"

interface Props {
    Champ: Champion
    type: string
    showBtn?: boolean;

}

export const Card = ({ Champ, type, showBtn }: Props) => {

    let ruta = `/Champ/${Champ.id}`
    return (
        <div className={type}>
            <h3>{Champ.id}</h3>
            <ImageCard name={Champ.id} />
            {showBtn && (
                <Button label="Ver Detalles" parentMethod={() => window.location.href = ruta} />
            )}
        </div>
    )
}