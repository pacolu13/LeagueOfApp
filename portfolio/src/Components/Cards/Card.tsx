import { BarLevel } from ".."

interface Props {
    title: string,
    description: string,
    level: number
    imgLenguage: string
}

export const Card = ({ title, description, level, imgLenguage }: Props) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <BarLevel level={level} />
            <div>{description}</div>
            <img src={imgLenguage} alt={title} />
        </div>
    )
}