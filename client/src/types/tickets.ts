

import { Comment, CustomBoardOption, HistoryLog } from "./common";
import { User } from "./users";


export interface Ticket 
{
    id: string;
    dateCreated: Date;
    lastUpdate: Date;
    title: string;
    ticketType: CustomBoardOption;
    severity: CustomBoardOption;
    tags: CustomBoardOption[];
    assignedTo: User[];
}

export interface TicketExtended extends Ticket {
    basicHeadline: string;
    longDescription: string;
    history: HistoryLog[];
    comments: Comment[];
}
