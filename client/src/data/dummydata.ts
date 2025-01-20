import { BasicTicketData } from "../types";

export default function TEST_FetchTicketData(id: string) : BasicTicketData | null {
    for(let i = 0; i < DummyTickets.length; i++){
        if(DummyTickets[i].id === id){
            return DummyTickets[i];
        }
    }
    return null;
}

export const DummyTickets: BasicTicketData[] = [
    {
        id: "xx213-4rber-342da",
        dateCreated: new Date(),
        lastUpdate: new Date(),
        title: "Test Title",
        severity: "Low",
        type: "Improvement",
        assignedTo: [
        {
            id: "1234",
            name: "Robert",
            email: "robert@example.com"
        }
        ],
        tags: [
            "data", "security"
        ]
    },
    
    {
        id: "kto40-jltlkr-0r4in",
        dateCreated: new Date(),
        lastUpdate: new Date(),
        title: "Test Title",
        severity: "High",
        type: "Feature",
        assignedTo: [
        {
            id: "1234",
            name: "Sarah",
            email: "sarah@example.com"
        }
        ],
        tags: [
            "security", "users"
        ]
    },

]