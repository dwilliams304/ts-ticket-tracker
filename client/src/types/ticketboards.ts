/*
    A TicketBoard refers to the data object/page that would contain all of the tickets,
    including custom options that the user can create (as in they could create custom tags, 
    severities, and ticket types). TicketBoards will OWN the Tickets through their ids within 
    the database. TicketBoards will also own all of their custom features, their names will have 
    to be unique within their respective tables.
    
    A User can access their assigned TicketBoards within the main Dashboard. TicketBoards will return
    their basic TicketBoard object, including their id, title, cover image, and will be highlighted with
    their chosen color. 

    TicketBoards will additionally own their roles and departments, but won't by default
    be returned within the ticketboard object that gets returned to the client.
    This will 

    The TicketBoardExtended object refers to the data response that would be given and used to
    show the board's full information when accessing that ticket board's page. This includes:
    - All the tickets within the board
    - All their custom features (tags, severities, types, theme, cover image)
    - The date it was created
    - Board tagline
    - The admin (the user that created the board)
        - This would be visible within the board's directory page
        - This could also be hidden, which is chosen by the admin
    - The assignees (all the users that have been added and can access the specific board)
        - This would be visible within the board's directory page
        - This could also be hidden, which is chosen by the admin

    Ticket boards FULL response (when accessing the specific board page) would look similar to:

    board = {
        id: string;
        title: string;
        coverImage: string;
        boardColor: string;
        tags: [
            {
                name: "Tag 1",
                color: "#FFFFFF",
                icon: "https://exampleiconurl.com/1"
            },
            {
                name: "Tag 2",
                color: #FF00FF,
                icon: "https://exampleiconurl.com/2"
            }
        ],
        severities: [
            {
                name: "Severity 1",
                color: "#FF0000",
                icon: "https://exampleiconurl.com/3"
            }
        ],
        types: [
            {
                name: "Feature",
                color: "#00FF00",
                icon: "https://exampleiconurl.com/4"
            },
            {
                name: "Bug",
                color: "#703636ff",
                icon: "https://exampleiconurl.com/5"
            }
        ],
        admin: "user-id-would-go-here (or be hidden)",
        assignees: [
            "user-ids-would-go-here (or be hidden)"
        ],
        tickets: [
        {
            id: 0,
            dateCreated: 12/30/2021,
            lastUpdate: 11/30/2021,
            title: "Users can't change contact email",
            ticketType: {
                name: "Bug",
                color: "#703636ff",
                icon: "httpes//exampleiconurl.com/5"
            },
            severity: {
                name: "Severe 1",
                color: "#FF0000",
                icon: "https://exampleiconurl.com/3"
            }
            tags: [
                //tags data would go here, same as the type/severity
            ],
            assignedTo: [
                //user ids would go here, showing their name and role color
            ],
        }
        ]
    }
*/

import { CustomBoardOption } from "./common";
import { Ticket } from "./tickets";
import { User } from "./users";


export interface TicketBoard {
    id: string;
    title: string;
    coverImage: string;
    boardColor: string;
}

export interface TicketBoardExtended extends TicketBoard
{
    tags: CustomBoardOption[];
    severities: CustomBoardOption[];
    types: CustomBoardOption[];
    assignees: User[];
    admin: User;
    tickets: Ticket[];
}
