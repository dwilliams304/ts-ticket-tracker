import "./layout.css";
import DummyLogo from "../../assets/vite copy.svg";

export default function NavHeader(){
    return(
        <nav>
            <img
                src={DummyLogo}
                alt="Icon"
            />
            <h1>Hello, $NAME</h1>
            <button>
                Help
            </button>
        </nav>
    )
}