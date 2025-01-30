export interface Data {
    data: Record<string, Champion>;
}

export interface Champion {
    id: string;
    blurb: string;
    key: string;
    title?: string;
    tags?: string[];
    partype?: string;
    info?: {attack: number, defense: number, magic: number, difficulty: number};
}
