import { TicketBoardExtended } from "../types";
import { FetchBoardUser } from "./dummyBoardUserData";
import { FetchTicket } from "./dummyTicketData";

import TestImage1 from "../../public/gradient256.png";
import TestImage2 from "../../public/moon256.jpg";

export function FetchTicketBoardData(id: string): TicketBoardExtended
{
    console.log("Please implement me! Using dummy data.");
    for(let i = 0; i < TicketBoards.length; i++){
        if(TicketBoards[i].id === id) return TicketBoards[i];
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
        coverImage: TestImage1,
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
            FetchBoardUser("0"),
            FetchBoardUser("1")
        ],
        admin: FetchBoardUser("0"),
        tickets: [
            FetchTicket("0"),
            FetchTicket("1")
        ]
    },
    {
        id: "1",
        title: "2D Platformer",
        coverImage: TestImage2,
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
            FetchBoardUser("2"),
            FetchBoardUser("3")
        ],
        admin: FetchBoardUser("2"),
        tickets: [
            FetchTicket("2"),
            FetchTicket("3")
        ]
    }
]