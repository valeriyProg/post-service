import { PostOffice } from "../post-office";

export interface ICompany {
    createOffice(office: PostOffice): void;
    deleteOffice(office: PostOffice): void;
    getOffice(filter: string): PostOffice;
}