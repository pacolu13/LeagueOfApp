import { Spell } from '../../interfaces';
import { champIcon, SpellsIcon } from "../../api";

import './AbilitiesChamp.css';


interface Props {
    abilities: Spell[];
    passive: Spell;
}

export const AbilitiesChamp = ({ abilities, passive }: Props) => {
    return (
        <div className="abilities-champ">
            <h3>Abilities</h3>
            <ul className='abilities-list'>
                <li>
                    <h4>{passive.name}</h4>
                    <p>{passive.description}</p>
                    <img src={`${champIcon}${passive?.image.full}`} alt={passive.name} />
                </li>
                {abilities && abilities.map((ability) => (
                    <li key={ability.id}>
                        <h4>{ability.name}</h4>
                        <p>{ability.description}</p>
                        <div className='ability-details'>
                            <p>Cooldown: {ability.cooldownBurn}</p>
                            <p>Cost: {ability.costBurn}</p>
                        </div>
                        <img src={`${SpellsIcon}${ability.image.full}`} alt={ability.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
