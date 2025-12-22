import { TicketBoardExtended } from "../types";
import { FetchBoardUsers } from "./dummyBoardUserData";
import { FetchTickets } from "./dummyTicketData";

export function FetchTicketBoardData(name: string): TicketBoardExtended
{
    console.log("Please implement me! Using dummy data.");
    for(let i = 0; i < TicketBoards.length; i++){
        if(TicketBoards[i].title === name) return TicketBoards[i];
    }
    return TicketBoards[0]; //TESTING ONLY
}

export function FetchAllTicketBoards(): TicketBoardExtended[]{
    return TicketBoards;
}

const TicketBoards: TicketBoardExtended[] = [
    {
        id: "0",
        title: "Neon Divide",
        coverImage: "google.com",
        boardColor: "#FF00FF",
        tags: [
            {
                name: "Gameplay",
                color: "#F77F0A",
                icon: "google.com"
            }
        ],
        severities: [
            {
                name: "Low",
                color: "yellow",
                icon: "google.com"
            },
            {
                name: "Moderate",
                color: "orange",
                icon: "blankurl"
            }
        ],
        types: [
            {
                name: "Feature",
                color: "green",
                icon: "blankurl"
            },
            {
                name: "Bug",
                color: "purple",
                icon: "blankurl"
            }
        ],

        assignees: [
            FetchBoardUsers("0"),
            FetchBoardUsers("1")
        ],
        admin: FetchBoardUsers("0"),
        tickets: [
            FetchTickets("0"),
            FetchTickets("1")
        ]
    },
    {
        id: "1",
        title: "2D Platformer",
        coverImage: "google.com",
        boardColor: "#626262ff",
        tags: [
            {
                name: "Gameplay",
                color: "#F77F0A",
                icon: "google.com"
            }
        ],
        severities: [
            {
                name: "Severe",
                color: "red",
                icon: "google.com"
            },
            {
                name: "Critical",
                color: "maroon",
                icon: "blankurl"
            }
        ],
        types: [
            {
                name: "Feature",
                color: "green",
                icon: "blankurl"
            },
            {
                name: "Bug",
                color: "purple",
                icon: "blankurl"
            }
        ],

        assignees: [
            FetchBoardUsers("2"),
            FetchBoardUsers("3")
        ],
        admin: FetchBoardUsers("2"),
        tickets: [
            FetchTickets("2"),
            FetchTickets("3")
        ]
    }
]