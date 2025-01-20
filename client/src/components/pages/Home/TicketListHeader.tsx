export default function TicketListHeader() {
    return (
        <div className="ticket tl-header">
            <div className="date">
                <p>Date</p>
            </div>
            <div className="id">
                <p>Id</p>
            </div>
            <div className="title">
                <p>Title</p>
            </div>
            <div className="severities">
                <p className="severity">Severity</p>
            </div>
            <div className="assigned-to">
                <p>Assigned To</p>
            </div>
            <div className="tags">
                <p>Tags</p>
            </div>
        </div>
    )
}