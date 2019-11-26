import { Client } from "../client";
import { PostCompany } from "../post-company";

export interface PostService {
    sendPackage(sender: Client, receiver: Client, transactedBy: PostCompany): void;
    getPackage(receiver: Client, sender: Client, transactedBy: PostCompany): void;
}