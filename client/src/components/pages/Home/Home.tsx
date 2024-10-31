import Bug from "../../Bug";
import FilterMenu from "../../FIlterMenu";
import "../../components.css";

export default function Home(){
    return(
        <div>
            <FilterMenu />
            <div className="bugs-list">
                <Bug />
                <Bug />
                <Bug />

            </div>
        </div>
    )
}