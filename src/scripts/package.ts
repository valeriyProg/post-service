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
        return `Package:
        Name: ${this.name};
        Type: ${this.type};
        Owner: ${owner};
        Weight: ${this.weight};
        Price:  ${this.price};`;
    }

}