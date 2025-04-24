import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TEST_FetchTicketData from "../../../data/dummydata";
import { FullTicket } from "../../../types";
import TicketComments from "./TicketComments";
import TicketHistoryList from "./TicketHistoryList";

type footertabs = "Comments" | "History";

import { tagColors } from "../../common/Ticket";

export default function TicketPage(){
    const [ticketData, setTicketData] = useState<FullTicket | null>();
    const [isLoading, setIsLoading] = useState(true);
    const [footerTab, setFooterTab] = useState<footertabs>("Comments");
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
        <div className="ticket-page">
            <div className="ticket-header">
                <p>Title: {ticketData?.basicDetails.title}</p>
                <p>Date Opened: {ticketData?.basicDetails.dateCreated.toDateString()}</p>
                <p>Type: {ticketData?.basicDetails.type}</p>
                <p>Tags: {
                    ticketData?.basicDetails.tags.map(tag => (
                        <span key={tag} className="tag"
                        style={{backgroundColor: tagColors[tag as keyof typeof tagColors], fontSize: "16px"}}>
                            {tag}
                        </span>
                    ))
                }</p>
            </div>
            <div className="ticket-body">
                <p>Description:</p>
                <p>{ticketData?.longDescription}</p>
            </div>
            <div className="ticket-footer">
                <div className="footer-tabs">
                    <h3 onClick={() => setFooterTab("Comments")}>Comments</h3>
                    <h3 onClick={() => setFooterTab("History")}>History</h3>
                </div>

                <div className="ticket-subsection">
                    {
                        footerTab === "Comments" ?
                        <TicketComments comments={ticketData?.comments} />
                        :
                        <TicketHistoryList history={ticketData?.history} />
                    }
                </div>
            </div>
        </div>
    )

}