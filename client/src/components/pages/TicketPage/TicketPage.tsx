import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FetchTicket } from "../../../data/dummyTicketData";
import { TicketExtended } from "../../../types";
import TicketComments from "./TicketComments";
import TicketHistoryList from "./TicketHistoryList";

type footertabs = "Comments" | "History";

export default function TicketPage(){
    const [ticketData, setTicketData] = useState<TicketExtended | null>();
    const [isLoading, setIsLoading] = useState(true);
    const [footerTab, setFooterTab] = useState<footertabs>("Comments");
    const { ticketID } = useParams();
    const navTo = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        const ticket = FetchTicket(String(ticketID));
        setTicketData(ticket);

        setIsLoading(false);

        setIsLoading(false);
    }, [ticketID])

    if(isLoading) return <p>Loading data...</p>
    if(!isLoading && !ticketData) navTo('/');

    return(
        <div className="ticket-page">
            <div className="ticket-header">
                <p>Title: {ticketData?.title}</p>
                <p>Date Opened: {ticketData?.dateCreated.toDateString()}</p>
                <p>Type: {ticketData?.ticketType.name}</p>
                <p>Tags: {
                    ticketData?.tags.map((tag, i) => (
                        <span key={i} className="tag"
                        style={{backgroundColor: tag.color, fontSize: "16px"}}>
                            {tag.name}
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
                    <h3 onClick={() => setFooterTab("Comments")}
                    className={`${footerTab === "Comments" && 'active-tab'}`}>
                        Comments
                    </h3>
                    <h3 onClick={() => setFooterTab("History")}
                    className={`${footerTab === "History" && 'active-tab'}`}>
                        History
                    </h3>
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