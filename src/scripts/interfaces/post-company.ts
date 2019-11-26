import { PostOffice } from "./post-office";

export interface PostCompany {
    name: string;
    city: string;
    owner: string;
    id: string;
    offices: PostOffice[];
}