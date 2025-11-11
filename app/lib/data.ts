import * as api from "../api/api"

export async function getRecentWorks(){
    try {
        const data = await api.fetchRecentWork()
        return data;
    }
    catch(error){
        console.error("error", error);
        throw new Error('Failed to fetch recent works');
    };
};

export async function getAllCarouselImages() {
    try {
        const data = await api.fetchAllCarouselImages();
        return data;
    }
    catch(error){
        console.error("error", error);
        throw new Error('failed to fetch collaboration images');
    };
};


//test url - http://localhost:10000\
//prod url - https://bright-spark-be.onrender.com\