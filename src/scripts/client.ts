import { Package } from "./package";

export abstract class Client {
    constructor(
        private _category: string,
        private _name: string,
        private _adress: string,
        private _telephone: string,
        private _havingPacks: Package[],
        private _sendedPacks: Package[],
        private _acceptedPacks: Package[]) { }

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
    get havingPacks(): Package[] {
        return this._havingPacks;
    }
    addHavingPack(pack: Package) {
        this._havingPacks.push(pack);
    }
    deleteHavingPack(pack: Package) {
        let index = this._havingPacks.indexOf(pack);
        this._havingPacks.splice(index, 1);
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
}