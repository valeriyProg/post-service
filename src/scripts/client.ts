import { Package } from "./package";

export abstract class Client {
    constructor(
        private _category: string,
        private _name: string,
        private _adress: string,
        private _telephone: string,
        private _allPacks: Package[] = [],
        private _sendedPacks: Package[] = [],
        private _acceptedPacks: Package[] = [],
        public waitingPackFor: Package[] = []
    ) { }

    get category(): string {
        return this._category
    }
    get name(): string {
        return this._name
    }
    get adress(): string {
        return this._adress
    }
    get telephone(): string {
        return this._telephone;
    }
    get allPacks(): Package[] {
        return this._allPacks;
    }
    getPack(name: string, type: string): Package {
        let i;
        this._allPacks.forEach((elem, index) => {
            if (elem.name === name && type === elem.type) {
                return i = index;
            }
        });
        let temp = this.allPacks.splice(i, 1);
        return temp[0];
    }
    addPack(pack: Package) {
        this._allPacks.push(pack);
    }
    deletePack(pack: Package) {
        let index = this._allPacks.indexOf(pack);
        this._allPacks.splice(index, 1);
    }
    get sendedPacks(): Package[] {
        return this._sendedPacks;
    }
    addSendedPack(pack: Package) {
        this._sendedPacks.push(pack);
    }
    get acceptedPacks(): Package[] {
        return this._acceptedPacks;
    }
    addAcceptedPack(pack: Package) {
        this._acceptedPacks.push(pack);
    }
    abstract toString(): string;
}