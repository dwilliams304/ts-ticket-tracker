import FilterMenu from "../components/layout/FilterMenu";

export default function TicketList(){
    return(
        <section className="tickets">
            <FilterMenu />
            <div className="ticket-head">
                <h4>ticket-id</h4>
                <h4>description</h4>
                <h4>severity</h4>
                <h4>assigned-to</h4>
                <h4>tags</h4>
                <h4>days-open</h4>
            </div>
        </section>
    )
}