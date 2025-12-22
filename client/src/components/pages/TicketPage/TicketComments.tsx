import { Comment } from "../../../types";

type TicketCommentsProps = {
    comments: Comment[] | undefined
}
export default function TicketComments({comments}: TicketCommentsProps){

    return(
        <div className="container">
            {
                comments === undefined || comments.length === 0 ?
                <h2>No comments</h2>
                :
                comments.map(comment => (
                    <div key={comment.id} className="ticket-subsection-item comment-item">
                        <div className="meta comment-meta">
                            <h3>{comment.user.name}</h3>
                            <p>on {comment.dateCreated.toDateString()}</p>
                        </div>
                        <p className="comment-content">{comment.content}</p>
                    </div>
                ))
            }
        </div>
    )
}