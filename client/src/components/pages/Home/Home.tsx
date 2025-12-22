import "../../components.css";

// import TicketList from "./TicketList";
import TicketBoardCard from "./TicketBoardCard";
import { useEffect, useState } from "react";
import { TicketBoard } from "../../../types";
import { FetchAllTicketBoards } from "../../../data/dummyTicketBoardData";


export default function Home(){
    const [ticketBoards, setTicketBoards] = useState<TicketBoard[]>();
    
    useEffect(() => {
        const data = FetchAllTicketBoards();

        setTicketBoards(data);
    }, [])

    return(
        <div>
            {
                ticketBoards?.map(board => (
                    <TicketBoardCard board={board} />
                ))
            }

        </div>
    )
}