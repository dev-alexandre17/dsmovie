export type Pixel = {
    id: number;
    title: string;
    score: number;
    count: number;
    image: string;
}

export type PixelPage = {
    content: Pixel[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}