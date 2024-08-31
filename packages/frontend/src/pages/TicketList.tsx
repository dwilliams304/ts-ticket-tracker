import { Ticket, TicketFilterMenu, AddTicketButton } from "../components"
import { fakeTicketData } from "../data/FakeTicketData"

const options = {
    severity: ['Low', 'Mild', 'Medium', 'High', 'Critical', 'Immediate'],
    assignedTo: ['Robert', 'Sarah'],
    tags: ['Data', 'Users', 'UI']
}


export default function TicketList(){
    return(
        <div className="w-full h-full flex flex-col py-12 px-6">
            <TicketFilterMenu options={options}/>
            <div className="grid grid-cols-[10%_35%_15%_20%_20%] w-3/4 mx-auto bg-slate-300 h-14 p-4 items-center">
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
            <AddTicketButton />
        </div>
    )
}