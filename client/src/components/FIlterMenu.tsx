export default function FilterMenu(){
    return(
        <div className="filter-menu">
            <h2>Filters</h2>
            <div>
                <div className="filter-option">
                    <p>Severity</p>
                    <select name="tags">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                    </select>
                </div>
                
                <div className="filter-option">
                    <p>Tags</p>
                    <select name="tags">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                    </select>
                </div>
            </div>
        </div>
    )
}