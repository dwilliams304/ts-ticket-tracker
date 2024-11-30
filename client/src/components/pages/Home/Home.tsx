import FilterMenu from "../../FIlterMenu";
import "../../components.css";

import { DummyTickets } from "../../../data/dummydata";
import TicketList from "./TicketList";


export default function Home(){
    return(
        <div>
            <FilterMenu />
            <TicketList 
                tickets={DummyTickets}
            />

        </div>
    )
}