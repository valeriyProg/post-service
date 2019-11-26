import { Package } from "./package";

export interface Client {
    type: string;
    name: string;
    adress: string;
    telephone: string;
    haveMails: Package[];
    sendedMails: Package[];
    acceptedMails: Package[];
}