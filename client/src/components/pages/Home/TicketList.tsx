import Ticket from "../../common/Ticket";
import { BasicTicketData } from "../../../types";

type TicketListProps = {
    tickets: BasicTicketData[];
}
export default function TicketList({tickets}: TicketListProps){
    return(
        <div className="ticket-list">
            {
                tickets.map(ticket => (
                    <Ticket 
                        ticket={ticket} 
                        key={ticket.id} 
                    />
                ))
            }
        </div>
    )
}