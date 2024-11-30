import { BasicTicketData } from "../../types";

type TicketProps = {
    ticket: BasicTicketData
}

export default function Ticket({ticket}: TicketProps){
    return(
        <div className="bug">
            <p>{ticket.dateCreated.toDateString()}</p>
            <p>{ticket.id}</p>
            <p>{ticket.title}</p>
            <p>{ticket.severity}</p>
            <div>
                {
                    ticket.assignedTo.map(user => (
                        <span key={user.id}>
                            {user.name}
                        </span>
                    ))
                }
            </div>
            <p>Tags</p>
            <div>
                {
                    ticket.tags.map(tag => (
                        <span key={tag}>
                            {tag}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}