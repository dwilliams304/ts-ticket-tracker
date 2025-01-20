import Ticket from "../../common/Ticket";
import { BasicTicketData } from "../../../types";
import TicketListHeader from "./TicketListHeader";

type TicketListProps = {
    tickets: BasicTicketData[];
}
export default function TicketList({tickets}: TicketListProps){
    return(
        <div className="ticket-list">
            <TicketListHeader />
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