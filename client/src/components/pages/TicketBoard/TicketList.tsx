import Ticket from "./Ticket";
import { Ticket as ITicket } from "../../../types";
import TicketListHeader from "./TicketListHeader";

type TicketListProps = {
    tickets: ITicket[] | undefined;
}
export default function TicketList({tickets}: TicketListProps){
    return(
        <div className="ticket-list">
            <TicketListHeader />
            {
                tickets?.map(ticket => (
                    <Ticket 
                        ticket={ticket} 
                        key={ticket.id} 
                    />
                ))
            }
        </div>
    )
}