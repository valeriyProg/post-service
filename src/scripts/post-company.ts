import { PostOffice } from "./post-office";
import { ICompany } from "./interfaces/company";

export class PostCompany implements ICompany {
    constructor(
        private _id: string,
        private _name: string,
        private _adress: string,
        private _owner: string,
        private _offices: PostOffice[]
    ) { }
    get name(): string {
        return this._name;
    }
    get adress(): string {
        return this._adress;
    }
    get owner(): string {
        return this._owner;
    }
    get id(): string {
        return this._id;
    }
    createOffice(office: PostOffice): void {
        this._offices.push(office);
    }
    deleteOffice(office: PostOffice): void {
        let index = [].indexOf.call(this._offices, office);
        this._offices.splice(index, 1);
        console.log(this._offices);
    }
    getOffice(id: string): PostOffice {
        let officeIndex: number;
        this._offices.filter((element, index) => {
            if (id === element.id) {
                officeIndex = index;
                return true;
            }
        });
        return this._offices[officeIndex];
    }
    getOfficesList(): string {
        let officesList;
        this._offices.map((elem, index) => {
            officesList += `\nOffice # ${index + 1} \n ID: ${elem.id}; \nName: ${elem.name}; \nAdress: ${elem.city}; \n Owner: ${elem.owner}\n`;
        });
        return officesList;
    }
}