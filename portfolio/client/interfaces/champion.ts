export interface Data {
    data: Record<string, Champion>;
}

export interface DataChampion {
    data: Record<string, Champion>;
}

export interface Champion {
    id: string;
    key: string;
    name: string;
    blurb?: string;
    title?: string;
    skins?: Skin[];
    lore?: string;
    allytips?: string[];
    enemytips?: string[];
    tags?: string[];
    partype?: string;
    info?: Info;
    stats?: Stats;
    spells: Spell[];
    passive: Spell;
}

export interface Info {
    attack?: number;
    defense?: number;
    magic?: number;
    difficulty?: number;
}
export interface Stats {
    hp?: number;
    hpperlevel?: number;
    mp?: number;
    mpperlevel?: number;
    movespeed?: number;
    armor?: number;
    armorperlevel?: number;
    spellblock?: number;
    spellblockperlevel?: number;
    attackrange?: number;
    hpregen?: number;
    hpregenperlevel?: number;
    mpregen?: number;
    mpregenperlevel?: number;
    crit?: number;
    critperlevel?: number;
    attackdamage?: number;
    attackdamageperlevel?: number;
    atackspeed?: number;
}

export interface Skin {
    id: string;
    num: number;
    name: string;
    chromas: boolean;
    image: string;
}

export interface Spell {
    id: string;
    name: string;
    label: string[];
    description: string;
    tooltip?: string;
    cooldown?: number[];
    cooldownBurn?: string;
    cost?: number[];
    costBurn?: string;
    image: {
        full: string;
    }
}