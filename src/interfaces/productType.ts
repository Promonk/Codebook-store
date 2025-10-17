export interface productType {
    id: number;
    name: string;
    overview: string;
    long_description: string;
    image_local: string;
    price: number;
    rating: number;
    best_seller?: boolean;
    size: number;
    in_stock?: boolean;
}