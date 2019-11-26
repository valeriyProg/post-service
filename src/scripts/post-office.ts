import { PostService } from "./interfaces/service";
import { PostCompany } from "./post-company";
import { Client } from "./client";

export class PostOffice implements PostService {
    constructor(
        private _name: string,
        private _city: string,
        private _owner: PostCompany,
        private _id: string
    ) { }

    get name(): string {
        return this._name;
    }
    get city(): string {
        return this._city;
    }
    get owner(): PostCompany {
        return this._owner;
    }
    get id(): string {
        return this._id;
    }

    sendPackage(sender: Client, receiver: Client, transactedBy: PostCompany): void { }
    getPackage(receiver: Client, sender: Client, transactedBy: PostCompany): void { }
}