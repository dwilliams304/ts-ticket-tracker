import { BugType } from "../../types"

type BugProps = {
    bug: BugType
}

export default function Bug({bug}: BugProps){
    return(
        <div className="bug">
            <p>{bug.dateCreated.toDateString()}</p>
            <p>{bug.id}</p>
            <p>{bug.description}</p>
            <p>{bug.severity}</p>
            <div>
                {
                    bug.assignedTo.map(user => (
                        <span key={user.id}>
                            {user.name}
                        </span>
                    ))
                }
            </div>
            <p>Tags</p>
            <div>
                {
                    bug.tags.map(tag => (
                        <span key={tag}>
                            {tag}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}