import { getAllEventThumbnails } from "../lib/data"
import EventCard from "../ui/events/eventCard"

export default async function Events(){

    const eventThumbnails = await getAllEventThumbnails();

    return (


        <div>
            <h1>Events</h1>
            <p>The range of different types of events is extensive. We aim to use pyrotechnics as a tool to create dynamic moments that have a great impact on the audience.</p>
            <EventCard data={eventThumbnails.data.data}/>
        </div>

    )
}