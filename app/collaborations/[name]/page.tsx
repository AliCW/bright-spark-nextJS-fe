import SingleCollaboration from "../../ui/collaborations/singleCollaboration"

export default async function Page({params}: {params: Promise<{ name: string }>}){

    const { name } = await params;
    
    return (
        <div>
            <SingleCollaboration name={name} />
        </div>
    );
};