export interface Package {
    type: string;
    name: string;
    weight: number;
    price: number;
    getInfo(): string[];
}