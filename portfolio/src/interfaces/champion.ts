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
    image?: {
        full: string;
        sprite: string;
    };
}
