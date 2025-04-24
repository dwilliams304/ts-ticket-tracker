import { Comment } from "../../../types";

type TicketCommentsProps = {
    comments: Comment[] | undefined
}
export default function TicketComments({comments}: TicketCommentsProps){

    return(
        <div className="comments-container">
            {
                comments === undefined || comments.length === 0 ?
                <h2>No comments</h2>
                :
                comments.map(comment => (
                    <div key={comment.id} className="comment-item">
                        <p>{comment.user.name}</p>
                        <p>{comment.timestamp.toDateString()}</p>
                        <p>{comment.comments}</p>
                    </div>
                ))
            }
        </div>
    )
}