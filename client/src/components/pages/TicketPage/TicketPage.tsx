import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TEST_FetchTicketData from "../../../data/dummydata";
import { BasicTicketData } from "../../../types";


export default function TicketPage(){
    const [ticketData, setTicketData] = useState<BasicTicketData | null>();
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
            <p>{ticketData?.title}</p>
            <p>{ticketData?.dateCreated.toDateString()}</p>
        </div>
    )

}