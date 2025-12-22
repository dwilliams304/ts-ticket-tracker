import { BoardUserExtended } from "../types";

export function FetchBoardUsers(id: string): BoardUserExtended
{
    console.log("Please implement me! Using dummy data.");
    for(let i = 0; i < BoardUsers.length; i++){
        if(BoardUsers[i].id === id) return BoardUsers[i];
    }
    return BoardUsers[0]; //Testing only
}


const BoardUsers: BoardUserExtended[] = [
    {
        id: "0",
        name: "John Smith",
        image: "google.com",
        email: "johns@example.com",
        role: {
            title: "Lead Developer",
            color: "#FFFF00",
            department: {
                name: "Front-End",
                color: "#00FFFF",
                image: "google.com",
                managers: [
                    "John Smith",
                    "Billy Bob",
                    "Unknown User"
                ]
            }
        },
        meta: {
            lastActive: new Date(),
            boardJoinDate: new Date,
            profileCreated: new Date,
            completedTicketTotal: 2312,
            recentComments: [

            ]
        },
    },
    {
        id: "1",
        name: "Billy Bob",
        image: "google.com",
        email: "williamb@example.com",
        role: {
            title: "Junior Developer",
            color: "#7a7a7aff",
            department: {
                name: "Front-End",
                color: "#00FFFF",
                image: "google.com",
                managers: [
                    "John Smith",
                    "Billy Bob",
                    "Unknown User"
                ]
            }
        },
        meta: {
            lastActive: new Date(),
            boardJoinDate: new Date,
            profileCreated: new Date,
            completedTicketTotal: 5,
            recentComments: [

            ]
        },
    },
    {
        id: "2",
        name: "Mary White",
        image: "google.com",
        email: "maryw@example.com",
        role: {
            title: "Project Manager",
            color: "#FFFF00",
            department: {
                name: "Data",
                color: "#35883cff",
                image: "google.com",
                managers: [
                    "Kyle Thurman",
                ]
            }
        },
        meta: {
            lastActive: new Date(),
            boardJoinDate: new Date,
            profileCreated: new Date,
            completedTicketTotal: 2312,
            recentComments: [

            ]
        },
    },
    
    {
        id: "3",
        name: "James Gordon",
        image: "google.com",
        email: "jamesg@example.com",
        role: {
            title: "Lead Designers",
            color: "#FFFF00",
            department: {
                name: "Design",
                color: "#35883cff",
                image: "google.com",
                managers: [
                    "James Gordon",
                ]
            }
        },
        meta: {
            lastActive: new Date(),
            boardJoinDate: new Date,
            profileCreated: new Date,
            completedTicketTotal: 2312,
            recentComments: [

            ]
        },
    },
    
]
