import { User, BasicTicketData, FullTicket } from "../types";

export default function TEST_FetchTicketData(id: string) : FullTicket | null {
    for(let i = 0; i < DummyTickets.length; i++){
        if(DummyTickets[i].basicDetails.id === id){
            return DummyTickets[i];
        }
    }
    return null;
}

export const Users: User[] = [
    {
        id: "1",
        name: "Robert",
        email: "rober@example.com"
    },
    {
        id: "2",
        name: "Jason",
        email: "jason@example.com"
    }
]

export const DummyTickets: FullTicket[] = [
    {
        basicDetails: {
            id: "xx213-4rber-342da",
            dateCreated: new Date(),
            lastUpdate: new Date(),
            title: "Test Title",
            severity: "Low",
            type: "Improvement",
            assignedTo: [ Users[0] ],
            tags: [
                "data", "security"
            ]
        },
        longDescription: "",
        history: [
            {
                timestamp: new Date(),
                user: Users[0]
            }
        ],
        comments: [
            {
                timestamp: new Date(),
                user: Users[0],
                comments: "No comments"
            }
        ]
    },
    {
        basicDetails: {
            id: "kto40-jltlkr-0r4in",
            dateCreated: new Date(),
            lastUpdate: new Date(),
            title: "Test Title 2",
            severity: "High",
            type: "Improvement",
            assignedTo: [ Users[1] ],
            tags: [
                "users", "security"
            ]
        },
        longDescription: "",
        history: [
            {
                timestamp: new Date(),
                user: Users[1]
            }
        ],
        comments: [
            {
                timestamp: new Date(),
                user: Users[1],
                comments: "No comments"
            }
        ]
    },

]