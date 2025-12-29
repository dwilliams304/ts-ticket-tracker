import { useUser } from "../../utils/UserContext";

export default function TestUserAuthenticationPage(){

    const user = useUser();

    return(
        <div>
            <h1>We are authenticated!</h1>
            <p>{user?.name}</p>
        </div>
    )
}