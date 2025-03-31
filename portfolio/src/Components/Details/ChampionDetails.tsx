import { Champion } from "../../interfaces";
import { InfoChampion } from "../../Components/Info/Info";
import "./ChampionDetails.css";
import { TipsChamp } from "../TipsChamp/TipsChamp";
import { StatsChamp } from "../TipsChamp/StatsChamp";
import { AbilitiesChamp } from "../TipsChamp/AbilitiesChamp";

interface Props {
    campeon: Champion;
}

export const ChampionDetails = ({ campeon }: Props) => {

    if (!campeon || campeon.info === undefined) {
        return <div>Loading...</div>;
    }

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
            <TipsChamp tips={campeon.allytips ?? []} title={"Ally Tips"} />
            <TipsChamp tips={campeon.enemytips ?? []} title={"Enemy Tips"} />
            <h3>Partype</h3>
            <p>{campeon.partype}</p>
            <InfoChampion info={campeon.info} />
            <StatsChamp stats={campeon.stats ?? {}} />
            <AbilitiesChamp abilities={campeon.spells} passive={campeon.passive}></AbilitiesChamp>
        </div>
    );
}