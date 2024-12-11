import { BasicTicketData } from "../../types";

type TicketProps = {
    ticket: BasicTicketData
}

const severityColors = {
    None: "#7f7f7f",
    Low: "#00c621",
    Medium: "#eaff00",
    High: "#ff9500",
    Critical: "#ff0000"
}

const tagColors = {
    Bug: "",
    Test: "",
    Improvement: "",
    Feature: "",
    Task: "",
    Vulnerability: "",
}

export default function Ticket({ticket}: TicketProps){
    return(
        <div className="ticket">
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
                style={{backgroundColor: severityColors[ticket.severity]}}>{ticket.severity}</p>
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
                        <span key={tag} className="tag">
                            {tag}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}