import { BasicTicketData } from "../../types";

type TicketProps = {
    ticket: BasicTicketData
}

export default function Ticket({ticket}: TicketProps){
    return(
        <div className="ticket">
            <div>
                <p>{ticket.dateCreated.toDateString()}</p>
            </div>
            <div>
                <p>{ticket.id}</p>
            </div>
            <div>
                <p>{ticket.title}</p>
            </div>
            <div>
                <p>{ticket.severity}</p>
            </div>
            <div>
                {
                    ticket.assignedTo.map(user => (
                        <span key={user.id}>
                            {user.name}
                        </span>
                    ))
                }
            </div>
            <div className="tags">
                {
                    ticket.tags.map(tag => (
                        <span key={tag} className="tag">
                            {tag}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}