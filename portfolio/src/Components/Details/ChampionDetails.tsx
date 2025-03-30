import { Champion } from "../../interfaces";
import { champIcon, SpellsIcon } from "../../api";

interface Props {
    campeon: Champion;
}

export const ChampionDetails = ({ campeon }: Props) => {


    return (
        <div className="champion-details">
            <h2>{campeon.name}</h2>
            <h3>{campeon.title}</h3>
            <p>{campeon.lore}</p>
            <h3>Stats</h3>
            <ul>
                {campeon.stats && Object.entries(campeon.stats).map(([key, value]) => (
                    <li key={key}>
                        {key}: {value}
                    </li>
                ))}
            </ul>
            <h3>Abilities</h3>
            <h4>passive</h4>
            <img src={`${champIcon}${campeon.passive?.image.full}`} alt={campeon.name} />
            <ul>
                {campeon.spells && campeon.spells.map(spell => (
                    <li key={spell.id}>
                        <h4>{spell.name}</h4>
                        <p>{spell.description}</p>
                        <img src={`${SpellsIcon}${spell?.image.full}`} alt={spell.name} />
                    </li>
                ))}
            </ul>

        </div>
    );
}