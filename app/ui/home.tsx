
import { getRecentWorks } from "../lib/data"
import LandingImages from "./landingImages";


export default async function Home(){
   
    const recentWorks = await getRecentWorks();

    // if(isLoading) {
    //     return (
    //         <p>Loading...</p>
    //     );
    // };

    console.log(recentWorks.data.data, "recentWorks<<<")

    return (
    <div className="home">
            <h1 className="mainHeader">Bright Spark Fireworks</h1>
            <p className="pageDetails">Bright Spark Fireworks is an arts-based pyrotechnics company that makes unique work for a wide spectrum of clients. We also work in collaboration with other outdoor artists and festivals to enhance and support artistic projects and performances.</p>
            <div className="landing">
                <LandingImages works={recentWorks.data.data}/>
            </div>
            {/* <EmbeddedYoutube embedId="NdAPKoRJEP8"/> */}
    </div>
    );
};