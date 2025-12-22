import { TicketExtended } from "../types";
import { FetchBoardUsers } from "./dummyBoardUserData";

export function FetchTickets(id: string): TicketExtended
{
    console.log("Please implement me! Using dummy data.");
    for(let i = 0; i < Tickets.length; i++){
        if(Tickets[i].id === id) return Tickets[i];
    }
    return Tickets[0]; //Testing only
}


const Tickets: TicketExtended[] = [
    {
        id: "0",
        dateCreated: new Date(),
        lastUpdate: new Date(),
        title: "Neon Divide Ticket 1",
        ticketType: {
            name: "Feature",
            color: "green",
            icon: "blankurl"
        },
        severity: {
            name: "",
            color: "",
            icon: ""
        },
        tags: [
            {
                name: "",
                color: "",
                icon: ""
            },
            {
                name: "",
                color: "",
                icon: ""
            }
        ],
        assignedTo: [
            FetchBoardUsers("0")
        ],
        basicHeadline: "This is a basic headling, wow!",
        longDescription: "This would be a long description, wow!",
        history: [

        ],
        comments: [

        ]
    },
    
    {
        id: "1",
        dateCreated: new Date(),
        lastUpdate: new Date(),
        title: "Neon Divide Ticket 2",
        ticketType: {
            name: "Feature",
            color: "green",
            icon: "blankurl"
        },
        severity: {
            name: "",
            color: "",
            icon: ""
        },
        tags: [
            {
                name: "",
                color: "",
                icon: ""
            },
            {
                name: "",
                color: "",
                icon: ""
            }
        ],
        assignedTo: [
            FetchBoardUsers("0")
        ],
        basicHeadline: "This is a basic headling, wow!",
        longDescription: "This would be a long description, wow!",
        history: [

        ],
        comments: [

        ]
    },
    {
        id: "3",
        dateCreated: new Date(),
        lastUpdate: new Date(),
        title: "2D Platformer Ticket 1",
        ticketType: {
            name: "Feature",
            color: "green",
            icon: "blankurl"
        },
        severity: {
            name: "",
            color: "",
            icon: ""
        },
        tags: [
            {
                name: "",
                color: "",
                icon: ""
            },
            {
                name: "",
                color: "",
                icon: ""
            }
        ],
        assignedTo: [
            FetchBoardUsers("0")
        ],
        basicHeadline: "This is a basic headling, wow!",
        longDescription: "This would be a long description, wow!",
        history: [

        ],
        comments: [

        ]
    },
    {
        id: "4",
        dateCreated: new Date(),
        lastUpdate: new Date(),
        title: "2D Platformer Ticket 2",
        ticketType: {
            name: "Feature",
            color: "green",
            icon: "blankurl"
        },
        severity: {
            name: "",
            color: "",
            icon: ""
        },
        tags: [
            {
                name: "",
                color: "",
                icon: ""
            },
            {
                name: "",
                color: "",
                icon: ""
            }
        ],
        assignedTo: [
            FetchBoardUsers("0")
        ],
        basicHeadline: "This is a basic headling, wow!",
        longDescription: "This would be a long description, wow!",
        history: [

        ],
        comments: [

        ]
    },

]