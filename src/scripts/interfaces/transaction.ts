import { Package } from "./package";
import { Client } from "../client";
import { PostOffice } from "../post-office";

export interface Transaction {
    id: string;
    package: Package;
    sendFromOffice: PostOffice;
    sendToOffice: PostOffice;
    sendFromClient: Client;
    sendToClient: Client;
    getTransactionInfo(): string;
}