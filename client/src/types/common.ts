import { User } from "./users";

export type CustomBoardOption = {
    name: string;
    color: string;
    icon: string;
}

export type Comment = {
    id: string;
    dateCreated: Date;
    likes: number;
    user: User;
    content: string;
}

export type HistoryLog = {
    id: string;
    dateCreated: Date;
    content: string;
    user: User;
}