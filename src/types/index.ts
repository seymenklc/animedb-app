export interface Items {
    count: number;
    total: number;
    per_page: number;
}

export interface Pagination {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: Items;
}

export interface Jpg {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
}

export interface Webp {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
}

export interface Images {
    jpg: Jpg;
    webp: Webp;
}

export interface Images2 {
    image_url: string;
    small_image_url: string;
    medium_image_url: string;
    large_image_url: string;
    maximum_image_url: string;
}

export interface Trailer {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: Images2;
}

export interface Title {
    type: string;
    title: string;
}

export interface From {
    day: number;
    month: number;
    year: number;
}

export interface To {
    day?: number;
    month?: number;
    year?: number;
}

export interface Prop {
    from: From;
    to: To;
}

export interface Aired {
    from: Date;
    to?: Date;
    prop: Prop;
    string: string;
}

export interface Broadcast {
    day: string;
    time: string;
    timezone: string;
    string: string;
}

export interface Producer {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface Licensor {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface Studio {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface Genre {
    mal_id: number;
    type: string;
    name: string;
    url: string;
    count?: number;
}

export interface GenreResponse {
    data: Genre[];
}

export interface Theme {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface Demographic {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface SingleAnimeResponse {
    data: SingleAnime;
}

export interface Relation {
    relation: string;
    entry: Entry[];
}

export interface Theme2 {
    openings: string[];
    endings: string[];
}

export interface External {
    name: string;
    url: string;
}

export interface Streaming {
    name: string;
    url: string;
}

export interface SingleAnime {
    mal_id: number;
    url: string;
    images: Images;
    trailer: Trailer;
    approved: boolean;
    titles: Title[];
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string[];
    type: string;
    source: string;
    episodes: number;
    status: string;
    airing: boolean;
    aired: Aired;
    duration: string;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background?: any;
    season: string;
    year: number;
    broadcast: Broadcast;
    producers: Producer[];
    licensors: Licensor[];
    studios: Studio[];
    genres: Genre[];
    explicit_genres: any[];
    themes: Theme[];
    demographics: Demographic[];
    relations: Relation[];
    theme: Theme2;
    external: External[];
    streaming: Streaming[];
}

export interface Links {
    first: string;
    last: string;
    prev?: any;
    next: string;
}

export interface Link {
    url: string;
    label: string;
    active: boolean;
}

export interface Meta {
    current_page: number;
    from: number;
    last_page: number;
    links: Link[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface QueryResponse {
    pagination: Pagination;
    data: SingleAnime[];
}

export interface AnimeResponse {
    data: SingleAnime[];
    links: Links;
    meta: Meta;
    pagination: Pagination;
}

export interface Episode {
    mal_id: number;
    url: string;
    title: string;
    premium: boolean;
}

export interface Entry {
    mal_id: number;
    url: string;
    images: Images;
    title: string;
}

export interface NewReleaseItem {
    entry: Entry;
    episodes: Episode[];
    region_locked: boolean;
}

export interface NewReleases {
    pagination: Pagination;
    data: NewReleaseItem[];
}

export interface CharacterType {
    mal_id: number;
    url: string;
    images: {
        webp: {
            image_url: string;
            small_image_url: string;
        };
    };
    name: string;
    name_kanji: string;
    nicknames: string[];
    favorites: number;
    about: string;
}

export interface Items {
    count: number;
    total: number;
    per_page: number;
}

export interface CharactersResponse {
    data: CharacterType[];
    pagination: Pagination;
}