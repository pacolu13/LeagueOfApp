import { Champion } from "../../interfaces/champion"
import { ImageCard } from "./ImageCard"

export const Card = ({ id, blurb}: Champion) => {
    return (
        <div className="card">
            <h3>{id}</h3>
            <div>{blurb}</div>
            <ImageCard name={id}/>
        </div>
    )
}