import "../../components.css";
import "./home.css";

// import TicketList from "./TicketList";
import TicketBoardCard from "./TicketBoardCard";
import { useEffect, useState } from "react";
import { TicketBoard } from "../../../types";
import { FetchAllTicketBoards } from "../../../data/dummyTicketBoardData";
import { useUser } from "../../../utils/UserContext";


export default function Dashboard(){
    const [ticketBoards, setTicketBoards] = useState<TicketBoard[]>();
    const user = useUser();

    useEffect(() => {
        console.log("Right now we are grabbing every ticket board of all time, and filtering on client. Please fix me.");
        const data = FetchAllTicketBoards().filter(item => user?.currentBoards.includes(item.id));

        setTicketBoards(data);
    }, [])

    return(
        <div className="ticket-boards-container">
            {
                ticketBoards?.map(board => (
                    <TicketBoardCard board={board} key={board.id} />
                ))
            }

        </div>
    )
}