import "./layout.css";
import DummyLogo from "../../assets/vite copy.svg";

export default function NavHeader(){
    return(
        <nav>
            <div>
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