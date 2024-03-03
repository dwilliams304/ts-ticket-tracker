import "../../styles/pages/tickets.css";

export default function FilterMenu() {
    return(
        <div className="filters full-shadow">
            <h2>Filters</h2>
            <div className="filter-options">
                <select id="project-name" name="project-name">
                    <option value="Project 1">Project 1</option>
                    <option value="Project 2">Project 2</option>
                    <option value="Project 3">Project 3</option>
                </select>

                
                <select id="ticket-severity" name="ticket-severity">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </select>

                <select id="ticket-status" name="ticket-status">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </select>

                <select id="ticket-tags" name="ticket-tags">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </select>


            </div>
        </div>
    )
}