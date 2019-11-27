import { Client } from "../client";
import { PostCompany } from "../post-company";
import { Package } from "../package";
import { PostOffice } from "../post-office";

export interface PostService {
    sendPackage(sender: Client, receiver: Client, transactedBy: PostOffice, pack: Package): void;
    addPackage(receiver: Client, sender: Client, transactedBy: PostOffice, pack: Package): void;
}