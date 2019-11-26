import { PostCompany } from "./post-company";

export interface PostOffice {
    name: string;
    city: string;
    owner: PostCompany;
    id: string;
    sendMail(): boolean;
    getMail(): boolean;
}