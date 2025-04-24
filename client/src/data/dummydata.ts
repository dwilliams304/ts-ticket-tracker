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
        email: "robert@example.com",
        department: "Front-End",
        role: "Developer"
    },
    {
        id: "2",
        name: "Jason",
        email: "jason@example.com",
        department: "Front-End",
        role: "Leader"
    },
    {
        id: "3",
        name: "Rudy",
        email: "rudy@example.com",
        department: "Infrastructure",
        role: "Leader"
    },
    {
        id: "4",
        name: "Jennifer",
        email: "jennifer@exmaple.com",
        department: "Back-End",
        role: "Manager"
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
                id: "03-001",
                timestamp: new Date(),
                user: Users[0],
                commit: "ticket created"
            }
        ],
        comments: [
            {
                id: "01-012",
                timestamp: new Date(),
                user: Users[0],
                comments: "Anyone know what's going on with this? Been sitting a while!"
            },
            {
                id: "01-013",
                timestamp: new Date(),
                user: Users[3],
                comments: "Hoping to get this done soon!"
            },
            {
                id: "01-014",
                timestamp: new Date(),
                user: Users[1],
                comments: "Funny comment."
            },
            {
                id: "01-015",
                timestamp: new Date(),
                user: Users[1],
                comments: "This sucks."
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
                id: "03-002",
                timestamp: new Date(),
                user: Users[1],
                commit: "ticket created"
            }
        ],
        comments: []
    },

]