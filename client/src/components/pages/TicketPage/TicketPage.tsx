import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TEST_FetchTicketData from "../../../data/dummydata";
import { FullTicket } from "../../../types";

type footertabs = "Comments" | "History";

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
                        ticketData?.basicDetails.tags.map(tag => (<span key={tag}>{tag}</span>))
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
                {/* TO-DO: SEPARATE INTO OWN COMPONENT */}
                <div>
                    {
                        footerTab === "Comments" ?
                        <div>
                            {
                                ticketData?.comments.map(comment => (
                                    <div>
                                        <p>{comment.user.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                        :
                        <div>History Tab</div>
                    }
                </div>
            </div>
        </div>
    )

}