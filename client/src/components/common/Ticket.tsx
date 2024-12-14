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
    bug: "#c814ff",
    test: "#159b15",
    improvement: "#80159b",
    feature: "#aacb29",
    task: "#810c52",
    ui: "#810c52",
    users: "#0c8181",
    security: "#810c0c",
    data: "#2962cb"
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
                        <span key={tag} className="tag"
                        style={{backgroundColor: tagColors[tag as keyof typeof tagColors]}}>
                            {tag}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}