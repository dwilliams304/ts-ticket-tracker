import { useNavigate } from "react-router-dom";
import { Ticket as ITicket } from "../../../types";

type TicketProps = {
    ticket: ITicket
}

export default function Ticket({ticket}: TicketProps){
    const navTo = useNavigate();
    return(
        <div className="ticket"
        onClick={() => navTo(`ticket/${ticket.id}`)}>
            <div className="date">
                <p>{ticket.dateCreated.toDateString()}</p>
            </div>
            <div className="id">
                <p>{ticket.id}</p>
            </div>
            <div className="title">
                <p>{ticket.title}</p>
            </div>
            <div className="severities">
                <p className="severity"
                style={{backgroundColor: ticket.severity.color}}>{ticket.severity.name}</p>
            </div>
            <div className="assigned-to">
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
                        <span key={tag.name} className="tag"
                        style={{backgroundColor: tag.color}}>
                            {tag.name}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}