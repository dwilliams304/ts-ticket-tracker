import "../../styles/sidebar.css";

export default function Sidebar(){
    return(
        <aside className="sidebar">
            <div className="profile-details">
                <img src="" alt="avatar"/>
                <p>Name</p>
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