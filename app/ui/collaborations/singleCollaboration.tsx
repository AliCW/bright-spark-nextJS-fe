import { getSingleCollaboration, getCollaborationImages } from "../../lib/data";
import { formatEventAndCollaborationNames } from "../../lib/utils";
import Carousel from "../carousel";

export default async function SingleCollaboration( { name } : { name : string } ){

    const fetchSingleCollaboration = await getSingleCollaboration(name);
    const fetchCollaborationImages = await getCollaborationImages(name);

    return (
        <div>
            <h1>{formatEventAndCollaborationNames(fetchSingleCollaboration.data.data[0].name)}</h1>
            <p>{fetchSingleCollaboration.data.data[0].description}</p>
            <Carousel images={fetchCollaborationImages.data}/>
        </div>
    )
}