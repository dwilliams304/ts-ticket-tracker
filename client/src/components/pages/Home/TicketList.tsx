import Ticket from "../../common/Ticket";
import { FullTicket } from "../../../types";
import TicketListHeader from "./TicketListHeader";

type TicketListProps = {
    tickets: FullTicket[];
}
export default function TicketList({tickets}: TicketListProps){
    return(
        <div className="ticket-list">
            <TicketListHeader />
            {
                tickets.map(ticket => (
                    <Ticket 
                        ticket={ticket.basicDetails} 
                        key={ticket.basicDetails.id} 
                    />
                ))
            }
        </div>
    )
}