export type User = {
    id: string;
    name: string;
    email: string;
    department: string;
    role: Role;
}

type Severities = "None" | "Low" | "Medium" | "High" | "Critical";
type Tags = "data" | "security" | "users" | "ui" | "test";
type TicketType = "Bug" | "Test" | "Improvement" | "Feature" | "Task" | "Vulernability";
type Role = "Developer" | "Leader" | "Manager" | "Admin";


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
    id: string;
    timestamp: Date;
    user: User;
    commit: string;
}
export type Comment = {
    id: string;
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