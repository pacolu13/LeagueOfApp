import { Champion } from "../../interfaces/champion"
import { ImageCard } from "./ImageCard"
import './Card.css'
import { Link } from "react-router-dom"

export const Card = ({ id }: Champion) => {
    return (
        <div className="card">
            <h3>{id}</h3>
            <ImageCard name={id} />
            <Link className="link" to={`/Champ/${id}`}>Champ</Link>
        </div>
    )
}