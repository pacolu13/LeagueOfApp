import { Champion } from "../../interfaces/champion"
import { Link } from "react-router-dom"
import { ImageCard } from "./ImageCard"
import './Card.css'

interface Props {
    Champ: Champion
    type: string
    showBtn?: boolean;

}

export const Card = ({ Champ, type, showBtn }: Props) => {
    return (
        <div className={type}>
            <h3>{Champ.id}</h3>
            <ImageCard name={Champ.id} />
            {showBtn && (
                <Link className="link" to={`/Champ/${Champ.id}`}>Button</Link>
            ) }
            
        </div>
    )
}