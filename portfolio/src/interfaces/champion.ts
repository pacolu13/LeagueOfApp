export interface Data {
    data: Record<string, Champion>;
}

export interface Champion {
    id: string;
    key: string;
    blurb?: string;
    title?: string;
    tags?: string[];
    partype?: string;
}
