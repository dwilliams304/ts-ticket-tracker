/*
    A full user's information would be structured like (including their sub-objects):

    user = {
        id: "m4mgo300mg" //could be a uuid, or just a number starting at 0
        name: "John Smith",
        email: "johnsmith@example.com",
        img: "https://exampleurl.com/exampleprofileimage",
        role: {
            title: "Lead Developer",
            color: "#00a516ff",
            department: {
                name: "Front-End",
                color: "#0000FF",
                image: "https://exampleurl.com/exampleimage",
                managers: [
                    "user-ids-would-go-here-linking-to-user",
                    "user-id-2",
                    "user-id-3"
                ]
            }
        },
        meta: {
            lastActiveDate: 12/20/2025,
            companyJoinDate: 11/13/2019,
            completedTickets: 1234,
            mostRecentComments: [ //5 most recent comments
                "comment-id-would-go-here-linking-to-5-comments",
                "comment-id-would-go-here-2"
            ]
        },
        assignedTickets: Tickets[],

    }


*/

import { Comment } from "./common";
// import { Ticket } from "./tickets";

export type Department = {
    name: string;
    color: string;
    image: string;
    managers: string[];
}

export type Role = {
    title: string;
    color: string;
    department: Department;
}

export interface User {
    id: string;
    name: string;
    image: string;
    email: string;
}


export interface BoardUser extends User {
    role: Role;
}


export type UserMetaData = {
    lastActive: Date;
    boardJoinDate: Date;
    profileCreated: Date;
    completedTicketTotal: number;
    // completedTickets: Ticket[];
    recentComments: Comment[]; //limit to 5
}

export interface BoardUserExtended extends BoardUser {
    meta: UserMetaData;
    // currentlyAssignedTickets: Ticket[];

}