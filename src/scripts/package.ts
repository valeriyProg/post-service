import { IPackage } from "./interfaces/package-interface";
import { Client } from "./client";

export class Package implements IPackage {
    constructor(
        public type: string,
        public name: string,
        public weight: number,
        public price: number,
        public owner: Client
    ) { }
    getInfo(): string {
        return `Package:\n Name: ${this.name} \n Type: ${this.type}\n Weight: ${this.weight} \nOwner: ${this.owner.name} Price:  ${this.price}\n`;
    }
}