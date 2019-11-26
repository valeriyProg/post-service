import { Package } from "./package";

export abstract class Client {
    constructor(
        private _category: string,
        private _name: string,
        private _adress: string,
        private _telephone: string,
        private _haveMails: Package[],
        private _sendedMails: Package[],
        private _acceptedMails: Package[]) { }

    abstract get category(): string;
    abstract get name(): string;
    abstract get adress(): string;
    abstract get telephoney(): string;
    abstract get haveMails(): Package[];
    abstract get sendedMails(): Package[];
    abstract get acceptedMails(): Package[];
}