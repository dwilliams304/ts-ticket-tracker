import Bug from "../../common/Bug";
import { BugType } from "../../../types";

type BugsListProps = {
    bugs: BugType[];
}
export default function BugsList({bugs}: BugsListProps){
    return(
        <div className="bugs-list">
            {
                bugs.map(bug => (
                    <Bug 
                        bug={bug} 
                        key={bug.id} 
                    />
                ))
            }
        </div>
    )
}