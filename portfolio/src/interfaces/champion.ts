export interface Data {
    data: Record<string, Champion>;
}

export interface DataChampion {
    data: Record<string, ChampionDetails>;
}

export interface Champion {
    id: string;
    key: string;
    blurb?: string;
    title?: string;
    tags?: string[];
    partype?: string;
}

export interface ChampionDetails {
    id: string;
    key: string;
    blurb?: string;
    title?: string;
    tags?: string[];
    partype?: string;
    skins?: Skin[];
    spells?: Spell[];
}

export interface Skin {
    id: string;
    num: number;
    name: string;
    chromas: boolean;
}

interface Spell {
    id: string;
    name: string;
    description: string;
    image: {
        full: string;
    }
}