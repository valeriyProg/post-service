import { IPackage } from "./interfaces/package-interface";
import { Client } from "./client";
import { PostOffice } from "./post-office";

export class Package implements IPackage {
    constructor(
        public type: string,
        public name: string,
        public weight: string,
        public price: string,
        public owner: Client | PostOffice
    ) { }
    getInfo(): string {
        let owner = this.owner instanceof Client ? this.owner.name : this.owner.name;
        return `
        Name: ${this.name};
        Type: ${this.type};
        Owner: ${owner};
        Weight: ${this.weight};
        Price:  ${this.price};`;
    }

}