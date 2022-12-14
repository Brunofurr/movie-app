export interface Movie {
    "adult": boolean;
    "backdrop_path": string;
    "genre_ids": number[];
    "id": number;
    "original_language": string;
    "original_title": string;
    "overview": string;
    "popularity": number;
    "poster_path": string;
    "release_date": string;
    "title": string;
    "video": boolean;
    "vote_average": number;
    "vote_count": number;
    "media_type"?: string;
}

export interface MovieDetail {
    "adult": boolean;
    "backdrop_path": string;
    "belongs_to_collection": BelongsToCollection;
    "budget": number;
    "genres": Genres[];
    "homepage": string;
    "id": number;
    "imdb_id": string;
    "original_language": string;
    "original_title": string;
    "overview": string;
    "popularity": number;
    "poster_path": string;
    "production_companies": ProductionCompanies[];
    "production_countries": ProoductionContries[];
    "release_date": string;
    "revenue": number;
    "runtime": number;
    "spoken_languages": SpokenLanguages[];
    "status": string;
    "tagline": string;
    "title": string;
    "video": boolean;
    "vote_average": number;
    "vote_count": number
}


export interface BelongsToCollection {
    "id": number;
    "name": string;
    "poster_path": string;
    "backdrop_path": string;
}

export interface Genres {
    "id": number;
    "name": string;
}

export interface ProductionCompanies {
    "id": number;
    "logo_path": string;
    "name": string;
    "origin_country": string;
}

export interface ProoductionContries {
    "iso_3166_1": string;
    "name": string;
}

export interface SpokenLanguages {
    "english_name": string;
    "iso_639_1": string;
    "name": string;
}
