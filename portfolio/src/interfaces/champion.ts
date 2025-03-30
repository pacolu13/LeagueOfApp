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
    stats?: Stats;
    spells?: Spell[];
    passive?: Spell;
    partype?: string;
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

interface Spell {
    id: string;
    name: string;
    description: string;
    image: {
        full: string;
    }
}