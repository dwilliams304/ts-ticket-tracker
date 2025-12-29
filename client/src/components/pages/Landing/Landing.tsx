import { useNavigate } from "react-router-dom"

export default function Landing(){
    const navTo = useNavigate();

    return(
        <>
            <h1>Landing page!</h1>
            <button onClick={() => navTo("/dashboard")}>
                Dashboard &rarr;
            </button>
        </>
    )
}