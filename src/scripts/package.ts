import { IPackage } from "./interfaces/package-interface";
import { Client } from "./client";

export class Package implements IPackage {
    constructor(
        public type: string,
        public name: string,
        public weight: string,
        public price: string,
        public owner: Client | string = "no information"
    ) { }
    getInfo(): string {
        let owner = this.owner instanceof Client ? this.owner.name : "no info";
        return `Package:\n Name: ${this.name} \n Type: ${this.type}\n Owner: ${owner}\n Weight: ${this.weight} \n  Price:  ${this.price}\n`;
    }

}