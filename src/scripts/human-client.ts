import { Client } from "./client";
import { Package } from "./package";
import { IPackage } from "./interfaces/package-interface";

export class HumanClient extends Client {
    constructor(
        category: string,
        name: string,
        adress: string,
        private _age: number,
        telephone: string,
        havingPacks: Package[] = [],
        sendedPacks: Package[] = [],
        acceptedPacks: Package[] = []
    ) {
        super(category, name, adress, telephone, havingPacks, sendedPacks, acceptedPacks);
    }
    get age(): number {
        return this._age;
    }
    createPack(pack: IPackage) {
        this.addPack(new Package(pack.type, pack.name, pack.weight, pack.price, this));
    }
    toString(): string {
        return ` 
            Client Iformation: 
            Category: ${this.category};\n
            Name: ${this.name};\n
            Adress: ${this.adress};\n
            Age: ${this._age};\n
            Telephone: ${this.telephone};\n `;
    }
}