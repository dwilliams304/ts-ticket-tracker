import { useNavigate } from "react-router-dom";
import "./layout.css";
import DummyLogo from "../../assets/vite copy.svg";

export default function NavHeader(){
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
            </div>
        </nav>
    )
}