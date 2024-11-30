import { BugType } from "../types";

export const DummyBugs: BugType[] = [
    {
        id: "xx213-4rber-342da",
        dateCreated: new Date(),
        description: "Test Description",
        severity: "Low",
        assignedTo: [
        {
            id: "1234",
            name: "Robert",
            email: "robert@example.com"
        }
        ],
        tags: [
            "Data", "Security"
        ]
    },
    
    {
        id: "kto40-jltlkr-0r4in",
        dateCreated: new Date(),
        description: "Test Description",
        severity: "High",
        assignedTo: [
        {
            id: "1234",
            name: "Sarah",
            email: "sarah@example.com"
        }
        ],
        tags: [
            "Security", "Users"
        ]
    },

]