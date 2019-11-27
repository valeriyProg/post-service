import { Client } from "../client";
import { PostOffice } from "../post-office";
import { Package } from "../package";


export interface Transaction {
    id: string;
    method: string;
    package: Package;
    sendFromOffice: PostOffice;
    sendToOffice: PostOffice;
    sendFromClient: Client;
    sendToClient: Client;
    // getTransactionInfo(): string ;
}