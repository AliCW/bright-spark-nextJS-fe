import { getAllCollaborationThumbnails } from "../lib/data";
import CollaborationCard from "../ui/collaborations/collaborationCard";

export default async function Page(){

    const collaborationThumbnails = await getAllCollaborationThumbnails();

    return (
        <div>
            <h1>Collaborations</h1>
            <p>We work in three different ways when collaborating with other artists
                Firstly, we work directly on their show content. Bring our pyrotechnical experience and creative ideas to enhance the work.
                Secondly, Other artists with specific ideas and skills are invited in to help develop our work.
                Thirdly, we support and liaise between Artists whose work contains a pyrotechnic element and the festival where they will perform. Safety, Pyrotechnic solutions, and support on the set up and performance of the work. (These Artists mainly come from continental Europe). 
            </p>
    
            <CollaborationCard data={collaborationThumbnails.data.data}/>
        </div>
    )
}