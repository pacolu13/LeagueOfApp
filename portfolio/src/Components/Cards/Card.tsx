import { Champion } from "../../interfaces/champion"
import { Link } from "react-router-dom"
import { ImageCard } from "./ImageCard"
import './Card.css'

interface Props {
    Champ: Champion
}

export const Card = ({ Champ }: Props) => {
    return (
        <div className="card">
            <h3>{Champ.id}</h3>
            <ImageCard name={Champ.id} />
            <Link className="link" to={`/Champ/${Champ.id}`}>Button</Link>
        </div>
    )
}