
type TicketProps = { //TEMPORARY
    ticket : {
        daysOpen: number,
        description: string,
        severity: string,
        assignedTo: string[],
        tags: string[]
    }
};

export default function Ticket(props: TicketProps){
    const {daysOpen, description, severity, assignedTo, tags} = props.ticket;
    return(
        <div className="w-full h-16 border-b-slate-200 border-b-2 
        cursor-pointer hover:shadow-md grid grid-cols-5 p-4 items-center">
            <h4>{daysOpen}d</h4>
            <h4 className="text-ellipsis">{description}</h4>
            <h4>{severity}</h4>
            <div className="space-x-2">
                {
                    assignedTo.map((person, i) => {
                        return <span key={i}>{person}</span>
                    })
                }
            </div>
            <div className="space-x-2">
                {
                    tags.map((tag, i) => {
                        return <span key={i}>{tag}</span>
                    })
                }
            </div>
        </div>
    )
}