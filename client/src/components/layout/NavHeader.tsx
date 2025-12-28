import { useNavigate } from "react-router-dom";
import "./layout.css";
import DummyLogo from "../../assets/vite copy.svg";
import { User } from "../../types";

type NavHeaderProps = {
    user: User | null;
    login: () => void;
    logout: () => void;
}

export default function NavHeader({user, login, logout}: NavHeaderProps){
    const navTo = useNavigate();
    

    return(
        <nav>
            <div
            onClick={() => navTo(`/`)}>
                <img
                    src={DummyLogo}
                    alt="Icon"
                    
                />
            </div>
            <div>
                <h1>Hello, $NAME</h1>
            </div>
            <div>
                <button>
                    Help
                </button>
                {
                    user ?
                    <button onClick={logout}>Logout</button>
                    :
                    <button onClick={login}>Login</button>
                }
            </div>
        </nav>
    )
}