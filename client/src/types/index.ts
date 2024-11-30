export type PageRouteType = {
    path: string;
    element: React.ElementType;
    protectedRoute: boolean;
    redirPath?: string;
}

export type User = {
    id: string;
    name: string;
    email: string;
}

type BugSeverities = "Non-Important" | "Low" | "Medium" | "High" | "Critical";
type Tags = "Data" | "Security" | "Users" | "UI/UX";

export type BugType = {
    id: string;
    dateCreated: Date;
    description: string;
    severity: BugSeverities;
    assignedTo: User[];
    tags: Tags[];
}