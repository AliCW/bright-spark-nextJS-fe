import * as api from "../api/api"

export async function getRecentWorks(){
    try{
        const data = await api.fetchRecentWork()
        return data;
    }
    catch(error){
        console.error("error", error)
        throw new Error('Failed to fetch recent works');
    }
}


//test url - http://localhost:10000\
//prod url - https://bright-spark-be.onrender.com\