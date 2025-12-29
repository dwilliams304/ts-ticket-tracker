import { useEffect } from "react"

export default function TestUserAuthenticationPage(){
    useEffect(() => {
        console.log("Loaded Authenticated Page!");
    }, [])
    return(
        <div>
            <h1>We are authenticated!</h1>
        </div>
    )
}