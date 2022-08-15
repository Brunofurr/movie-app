export interface Response<T> {
    results: T[];
    dates?: Dates;
    page?: number;
    total_pages?: number;
    total_results?: number;
}

export interface Dates {
    maximum: string;
    minimum: string;
}