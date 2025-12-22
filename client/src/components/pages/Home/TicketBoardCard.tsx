import { TicketBoard } from "../../../types"

type BoardCardProps = {
    board: TicketBoard;
}

export default function TicketBoardCard({board}: BoardCardProps){
    const { title, boardColor } = board;

    return(
        <div>
            <h2>{title}</h2>
            <p>{boardColor}</p>
        </div>
    )
}