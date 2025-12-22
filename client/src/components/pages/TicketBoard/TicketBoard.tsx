import { useNavigate, useParams } from "react-router-dom";
import FilterMenu from "../../TicketFiltersMenu.tsx";
import TicketList from "./TicketList";
import { useEffect, useState } from "react";
import { TicketBoardExtended } from "../../../types";
import { FetchTicketBoardData } from "../../../data/dummyTicketBoardData";

export default function TicketBoard(){
    const { boardName } = useParams();
    const navTo = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [boardData, setBoardData] = useState<TicketBoardExtended>();

    useEffect(() => {
        const data = FetchTicketBoardData(String(boardName));

        setBoardData(data);

        return () => {
            setIsLoading(false)
        }
    }, [])
    

    
    if(isLoading) return <p>Loading data...</p>
    if(!isLoading && boardData === null) navTo('/');
    return(
        <div>
            <FilterMenu />
            <TicketList 
                tickets={boardData?.tickets}
            />
        </div>
    )
}