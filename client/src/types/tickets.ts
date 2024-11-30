export type User = {
    id: string;
    name: string;
    email: string;
}

type Severities = "Non-Important" | "Low" | "Medium" | "High" | "Critical";
type Tags = "data" | "security" | "users" | "ui/ux";
type TicketType = "Bug" | "Test" | "Improvement" | "Feature" | "Task" | "Vulernability";


export type BasicTicketData = {
    id: string;
    dateCreated: Date;
    lastUpdate: Date;
    dateFinished?: Date;
    type: TicketType;
    title: string;
    severity: Severities;
    assignedTo: User[];
    tags: Tags[];
}

export type TicketHistory = {
    timestamp: Date;
    user: User;
}
export type Comment = {
    timestamp: Date;
    user: User;
    comments: string;
}

export type FullTicket = {
    basicDetails: BasicTicketData;
    longDescription: string;
    history: TicketHistory[];
    comments: Comment[];
}