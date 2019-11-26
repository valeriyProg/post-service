import { Client } from "./client";
import { Package } from "./package";

export class HumanClient extends Client {
    constructor(
        category: string,
        name: string,
        adress: string,
        telephone: string,
        haveMails: Package[],
        sendedMails: Package[],
        acceptedMails: Package[]
    ) {
        super(category, name, adress, telephone, haveMails, sendedMails, acceptedMails);
    }
}