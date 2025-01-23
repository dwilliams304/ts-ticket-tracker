import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TEST_FetchTicketData from "../../../data/dummydata";
import { FullTicket } from "../../../types";


export default function TicketPage(){
    const [ticketData, setTicketData] = useState<FullTicket | null>();
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const navTo = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        const ticket = TEST_FetchTicketData(String(id));
        setTicketData(ticket);

        setIsLoading(false);

        return () => {
            setIsLoading(false)
        }
    }, [])

    if(isLoading) return <p>Loading data...</p>
    if(!isLoading && ticketData === null) navTo('/');

    return(
        <div>
            <h2>Ticket Page!</h2>
            <p>{ticketData?.basicDetails.title}</p>
            <p>{ticketData?.basicDetails.dateCreated.toDateString()}</p>
        </div>
    )

}