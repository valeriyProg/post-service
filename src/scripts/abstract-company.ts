export abstract class Organisation {
    constructor(
        protected _id: string,
        protected _name: string,
        protected _adress: string,
        protected _owner: string,
    ) { }
    abstract get name(): string;
    abstract get adress(): string;
    abstract get owner(): string | Organisation;
    abstract get id(): string;
}