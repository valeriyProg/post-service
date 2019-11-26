import { Client } from "../client";
import { PostCompany } from "../post-company";
import { Package } from "../package";

export interface PostService {
    sendPackage(sender: Client, receiver: Client, transactedBy: PostCompany, pack: Package): void;
    getPackage(receiver: Client, sender: Client, transactedBy: PostCompany, pack: Package): void;
}