export interface IPackage {
    type: string;
    name: string;
    weight: number;
    price: number;
    getInfo(): string;
}