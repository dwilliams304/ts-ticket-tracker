type FilterMenuProps = {
    options: {
        severity: string[],
        assignedTo: string[],
        tags: string[]
    }
}

export default function TicketFilterMenu(props: FilterMenuProps){
    const options = props.options;

    return(
        <div className="w-1/3 mx-auto mt-4 mb-12 px-16 py-2 text-center justify-center shadow-xl rounded-full border">
            <h2 className="text-xl pt-2 pb-4">Filters</h2>
            <div className="flex justify-between">
                <select className="border w-1/4">Severity
                    {options.severity.map((opt, i) => {
                        return <option key={i}>{opt}</option>
                    })}
                </select>
                <select className="border w-1/4">Assigned To
                    {options.assignedTo.map((opt, i) => {
                        return <option key={i}>{opt}</option>
                    })}
                </select>
                <select className="border w-1/4">Tags
                    {options.tags.map((opt, i) => {
                        return <option key={i}>{opt}</option>
                    })}
                </select>
            </div>
        </div>
    )
}