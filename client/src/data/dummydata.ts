import { User, FullTicket } from "../types";

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
        longDescription: "This has a longer description with more in depth details on things that are important with more details about the details about how there is more in depth details about the details that should be more in depth about the details.",
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
                comments: "Comment 1"
            },
            {
                timestamp: new Date(),
                user: Users[0],
                comments: "Comment 2"
            },
            {
                timestamp: new Date(),
                user: Users[1],
                comments: "Comment 3"
            },
            {
                timestamp: new Date(),
                user: Users[1],
                comments: "Comment 4"
            },
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