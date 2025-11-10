import * as api from "../api/api"

export async function getRecentWorks(){
    try{
        console.log("fetching")
        const data = await api.fetchRecentWork()
        console.log("fetched")
        return data;
    }
    catch(error){
        console.error("error", error)
        throw new Error('Failed to fetch recent works');
    }
}