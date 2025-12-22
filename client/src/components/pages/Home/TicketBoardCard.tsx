import { TicketBoard } from "../../../types"
import "./home.css";
import { useNavigate } from "react-router-dom";

type BoardCardProps = {
    board: TicketBoard;
}

export default function TicketBoardCard({board}: BoardCardProps){
    const { title, boardColor, coverImage } = board;
    const navTo = useNavigate();

    return(
        <div className="ticket-board-card"
        onClick={() => {navTo(`/${board.id}`)}}>
            <img src={coverImage} />
            
            <h2 style={{borderTop: `2px solid ${boardColor}`, color: `${boardColor}`}}>{title} &rarr;</h2>
        </div>
    )
}