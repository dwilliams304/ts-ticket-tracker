import { BoardUserExtended } from "../types";

export function FetchBoardUser(id: string): BoardUserExtended
{
    return BoardUsersMap[id] || null;
}

export function FetchAllBoardUsers(): BoardUserExtended[]{
    return Object.values(BoardUsersMap);
}

const BoardUsersMap: Record<string, BoardUserExtended> = {
    "0":    {
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
                managers: ["0"]
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
    "1":     {
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
                managers: ["0"]
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
    "2":     {
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
    "3":     {
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
                managers: ["3"]
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
}
