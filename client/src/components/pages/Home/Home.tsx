import FilterMenu from "../../FIlterMenu";
import "../../components.css";
import BugsList from "./BugList";

import { DummyBugs } from "../../../data/dummydata";


export default function Home(){
    return(
        <div>
            <FilterMenu />
            <BugsList 
                bugs={DummyBugs}
            />

        </div>
    )
}