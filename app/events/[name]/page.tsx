

import SingleEvent from "../../ui/events/singleEvent";

export default async function Page({params}: {params: Promise<{ name: string }>}) {
  
    const { name } = await params;

    return (
        <div>
            <SingleEvent name={name}/>
        </div>
    )
}