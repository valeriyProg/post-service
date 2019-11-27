import { PostService } from "./interfaces/service";
import { PostCompany } from "./post-company";
import { Client } from "./client";
import { Package } from "./package";
import { Transaction } from "./interfaces/transaction";

export class PostOffice implements PostService {
    private _transactionCount: number = 0;
    private _store: Package[] = [];
    constructor(
        private _name: string,
        private _city: string,
        private _owner: PostCompany,
        private _id: string,
        private _clients: Client[] = [],
        private _transactionLog: Transaction[] = []
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
    get client(): Client[] {
        return this._clients;
    }
    addClient(client: Client): void {
        this._clients.push(client);
    }
    addClients(clients: Client[]): void {
        this._clients.concat(clients);
    }
    removeClient(client: Client): void {
        try {
            let index = this._clients.indexOf(client);
            this._clients.splice(index, 1);
        } catch {
            console.log("client not founded");
        }
    }
    sendPackage(sender: Client, receiver: Client, transactedTo: PostOffice, pack: Package): void {
        this._transactionCount++;
        let transaction: Transaction = {
            id: this._transactionCount.toString(),
            method: "send",
            package: pack,
            sendFromClient: sender,
            sendFromOffice: this,
            sendToClient: receiver,
            sendToOffice: transactedTo
        };
        this._transactionLog.push(transaction);
        // receiver.addPack(pack);
        transactedTo.addPackage(receiver, sender, this, pack);
        receiver.waitingPackFor.push(pack);
    }
    addPackage(receiver: Client, sender: Client, transactedFrom: PostOffice, pack: Package): void {
        this._transactionCount++;
        let transaction: Transaction = {
            id: this._transactionCount.toString(),
            method: "get",
            package: pack,
            sendFromClient: sender,
            sendFromOffice: transactedFrom,
            sendToClient: receiver,
            sendToOffice: this
        };
        this._transactionLog.push(transaction);
        this._store.push(pack);
    }
    givePackToClient(client: Client) {
        if (client.waitingPackFor.length === 1) {
            let i = this._store.indexOf(client.waitingPackFor[0]);
            client.addPack(this._store[i]);
        }
    }
    getTransactionsLog(): Transaction[] {
        return this._transactionLog;
    }
    showTransactionsLog(): void {
        let log = '';
        if (this._transactionLog.length === 0) {
            return console.log("NO TRANSACTIONS YET");
        }
        this._transactionLog.forEach((elem, index) => {
            log += `TRANSACTION #${index}
            ID: ${elem.id};
            Method: ${elem.method}
            Package:  ${elem.package}
            SendFromClient: ${ elem.sendFromClient}
            sendFromOffice: ${elem.sendFromOffice}
            Sent To Client: ${elem.sendToClient}
            To Office: ${elem.sendToOffice}`;
        });
        console.log(log);
    }
    showStore(): void {
        console.log("STORE: " + this._store);
    }
    toString(): string {
        return `
            Post Office Iformation: 
            ID: ${this.id};
            Name: ${this.name};
            Adress: ${this.city};
            Owner: ${this.owner.name};
        `;
    }
}