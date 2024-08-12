import { Ticket } from "../components"

export default function TicketList(){
    return(
        <div className="w-full h-full flex flex-col py-12 px-6">
            <div className="text-center">
                <h2>Bug List</h2>
            </div>

            <div className="border border-slate-400 w-3/4 justify-center mx-auto space-y-2">
                {/* TICKET COMPONENTS GOES HERE */}
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
            </div>
        </div>
    )
}