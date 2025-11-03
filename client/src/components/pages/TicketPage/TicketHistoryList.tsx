import { TicketHistory } from "../../../types"

type TicketHistoryProps = {
    history: TicketHistory[] | undefined;
}

export default function TicketHistoryList({history}: TicketHistoryProps){
    return(
        <div className="container">
            {
                history === undefined || history.length === 0
                ?
                <h2>No ticket history</h2>
                :
                history.map(history => (
                    <div key={history.id} className="ticket-subsection-item history-item">
                        <div className="meta history-meta">
                            <h3>{history.user.name}</h3>
                            <p>on {history.timestamp.toDateString()}</p>                            
                        </div>
                        <p>{history.commit}</p>
                    </div>
                ))
            }
        </div>
    )
}