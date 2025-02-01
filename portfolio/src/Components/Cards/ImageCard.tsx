import './ImageCard.css';
import { API_ROUTES } from '../../api';

interface Props {
    name: string;
}

export const ImageCard = ({ name }: Props) => {
    return (
        <div className="img-card">
            <img src={`${API_ROUTES.splashArt}${name}_0.jpg`} alt={name} />
        </div>
    )
}