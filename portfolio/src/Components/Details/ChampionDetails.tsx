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
            <p>{campeon.blurb}</p>
            <h3>Tags</h3>
            <ul>
                {campeon.tags && campeon.tags.map(tag => (
                    <li key={tag}>
                        {tag}
                    </li>
                ))}
            </ul>
            <h3>Ally Tips</h3>
            <ul>
                {campeon.allytips && campeon.allytips.map(tip => (
                    <li key={tip}>
                        {tip}
                    </li>
                ))}
            </ul>
            <h3>Enemy Tips</h3>
            <ul>
                {campeon.enemytips && campeon.enemytips.map(tip => (
                    <li key={tip}>
                        {tip}
                    </li>
                ))}
            </ul>
            <h3>Partype</h3>
            <p>{campeon.partype}</p>
            <h3>Info</h3>
            <ul>
                {campeon.info && Object.entries(campeon.info).map(([key, value]) => (
                    <li key={key}>
                        {key}: {value}
                    </li>
                ))}
            </ul>

            <h3>Stats</h3>
            <ul>
                {campeon.stats && Object.entries(campeon.stats).map(([key, value]) => (
                    <li key={key}>
                        {key}: {value}
                    </li>
                ))}
            </ul>
            <div>
                <h3>passive</h3>
                <img src={`${champIcon}${campeon.passive?.image.full}`} alt={campeon.name} />
                <h4>{campeon.passive?.name}</h4>
                <p>{campeon.passive?.description}</p>
            </div>
            <h3>Abilities</h3>

            <ul>
                {campeon.spells && campeon.spells.map(spell => (
                    <li key={spell.id}>
                        <h4>{spell.name}</h4>
                        <p>{spell.description}</p>
                        <img src={`${SpellsIcon}${spell?.image.full}`} alt={spell.name} />
                        <p>Cooldown: {spell.cooldownBurn}</p>
                        <p>Cost: {spell.costBurn}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}