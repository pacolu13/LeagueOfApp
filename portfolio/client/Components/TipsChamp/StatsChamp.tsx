import { Stats } from '../../interfaces';
import './StatsChamp.css';

interface Props{
    stats: Stats;

}

export const StatsChamp = ({ stats }: Props) => {
    return (
        <div className="stats-champ">
            <h3>Stats</h3>
            <ul>
                {Object.entries(stats).map(([key, value]) => (
                    <li key={key}>
                        {key}: {value}
                    </li>
                ))}
            </ul>
        </div>
    );
};