import { PostOffice } from "./post-office";
import { Package } from "./package";
import { Client } from "./client";

export interface Transaction {
    id: string;
    package: Package;
    sendFromOffice: PostOffice;
    sendToOffice: PostOffice;
    sendFromClient: Client;
    sendToClient: Client;
    getTransactionInfo(): string;
}