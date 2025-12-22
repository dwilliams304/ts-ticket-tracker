import { TicketExtended } from "../types";
import { FetchBoardUser } from "./dummyBoardUserData";


export function FetchTicket(id: string): TicketExtended
{
    return Tickets[id];
}


const Tickets: Record<string, TicketExtended> = {
    "0": {
        id: "0",
        boardId: "neondivide",
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
            FetchBoardUser("0")
        ],
        basicHeadline: "This is a basic headling, wow!",
        longDescription: "This would be a long description, wow!",
        history: [

        ],
        comments: [

        ]
    },
    
    "1": {
        id: "1",
        boardId: "neondivide",
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
            FetchBoardUser("1")
        ],
        basicHeadline: "This is a basic headling, wow!",
        longDescription: "This would be a long description, wow!",
        history: [

        ],
        comments: [

        ]
    },
    "2": {
        id: "2",
        boardId: "2dplatformer",
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
            FetchBoardUser("2")
        ],
        basicHeadline: "This is a basic headling, wow!",
        longDescription: "This would be a long description, wow!",
        history: [

        ],
        comments: [

        ]
    },
    "3": {
        id: "3",
        boardId: "2dplatformer",
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
            FetchBoardUser("3")
        ],
        basicHeadline: "This is a basic headling, wow!",
        longDescription: "This would be a long description, wow!",
        history: [

        ],
        comments: [

        ]
    },

}