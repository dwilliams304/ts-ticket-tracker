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
                    <div key={history.id} className="history-item">
                        <p>{history.user.name}</p>
                        <p>{history.timestamp.toDateString()}</p>
                        <p>{history.commit}</p>
                    </div>
                ))
            }
        </div>
    )
}