import { IPackage } from "./interfaces/package-interface";
import { Client } from "./client";

export class Package implements IPackage {
    constructor(
        public type: string,
        public name: string,
        public weight: number,
        public price: number,
        public owner: Client | string = "no information"
    ) { }
    getInfo(): string {
        let owner = this.owner instanceof Client ? this.owner.name : "no info";
        return `Package:\n Name: ${this.name} \n Type: ${this.type}\n Weight: ${this.weight} \nOwner: ${owner} Price:  ${this.price}\n`;
    }
}