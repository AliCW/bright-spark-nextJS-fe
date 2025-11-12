import { getSingleEvent, getEventImages } from "../../lib/data";
import { formatEventAndCollaborationNames } from "../../lib/utils";
import Carousel from "../carousel";

export default async function SingleEvent({name}: {name: string}){

    const fetchSingleEvent = await getSingleEvent(name);
    const fetchEventImages = await getEventImages(name);

    const eventName = fetchSingleEvent.data.data[0].name;
    const description = fetchSingleEvent.data.data[0].description;



    return (
        <div>
            <h1>{formatEventAndCollaborationNames(eventName)}</h1>
            <p>{description}</p>
            <Carousel images={fetchEventImages.data}/>
        </div>
    )
}