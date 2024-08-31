import { Ticket, TicketFilterMenu } from "../components"

const options = {
    severity: ['Low', 'Mild', 'Medium', 'High', 'Critical', 'Immediate'],
    assignedTo: ['Robert', 'Sarah'],
    tags: ['Data', 'Users', 'UI']
}

const fakeTicketData = [
    {
        daysOpen: 3,
        description: "This is a fake description",
        severity: "Low",
        assignedTo: ["John", "Jane", "Rick"],
        tags: ["Tag 1", "Tag 2", "Tag 3"]
    },
    {
        daysOpen: 8,
        description: "This is a fake description",
        severity: "Low",
        assignedTo: ["John", "Jane", "Rick"],
        tags: ["Tag 1", "Tag 2", "Tag 3"]
    },
    {
        daysOpen: 21,
        description: "Something is happening, fix it! Add length to this string to do proper wrapping",
        severity: "Critical",
        assignedTo: ["John", "Jane", "Rick"],
        tags: ["Tag 1", "Tag 2", "Tag 3"]
    },
]

export default function TicketList(){
    return(
        <div className="w-full h-full flex flex-col py-12 px-6">
            <TicketFilterMenu options={options}/>
            <div className="grid grid-cols-5 w-3/4 mx-auto bg-slate-300 h-14 p-4 items-center">
                <h2 className="cursor-pointer">Days Open</h2>
                <h2 className="cursor-pointer">Description</h2>
                <h2 className="cursor-pointer">Severity</h2>
                <h2 className="cursor-pointer">Assigned To</h2>
                <h2 className="cursor-pointer">Tags</h2>
            </div>

            <div className="border border-slate-400 w-3/4 justify-center mx-auto space-y-2">
                {/* TICKET COMPONENTS GOES HERE */}
                {
                    fakeTicketData.map((ticket, i) => <Ticket ticket={ticket} key={i} />)
                }
            </div>
        </div>
    )
}