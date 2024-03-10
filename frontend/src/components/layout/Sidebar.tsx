import "../../styles/sidebar.css";
import DummyIcon from "../../assets/react.svg";

export default function Sidebar(){
    return(
        <aside className="sidebar">
            <div className="profile-details">
                <div>
                    <img src={DummyIcon} alt="avatar"/>
                    <p>Paul Atreides</p>
                </div>
                <h2>Engineering Manager</h2>
                <p>email@email.com</p>
            </div>
            <div className="sidebar-options">
                <ul>
                    <li className="active">Tickets</li>
                    <li>Users</li>
                    <li>Stats</li>
                    <li>Settings</li>
                    <li>Log Out</li>
                </ul>
            </div>
        </aside>
    )
}