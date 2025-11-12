import axios from "axios";

const api = axios.create({
    baseURL: "https://bright-spark-be.onrender.com/",
});

export async function getRecentWorks(){
    try {
        const data = await api.get("https://bright-spark-be.onrender.com/api/images/recent_work");
        return data;
    }
    catch(error){
        console.error("error", error);
        throw new Error("Failed to fetch recent works");
    };
};

export async function getAllCarouselImages() {
    try {
        const data = await api.get("https://bright-spark-be.onrender.com/api/images/carousel_images");
        return data;
    }
    catch(error){
        console.error("error", error);
        throw new Error("failed to fetch landing carousel images");
    };
};

export async function getAllEventThumbnails(){
    try {
        const data = await api.get("https://bright-spark-be.onrender.com/api/images/event/thumbnails");
        return data;
    }
    catch(error){
        console.error("error", error);
        throw new Error("failed to fetch event thumbnails images");
    };
};

export async function getSingleEvent(nameId){
    try {
        const data = await api.get(`https://bright-spark-be.onrender.com/api/events/${nameId}`);
        return data;
    } catch(error){
        console.error("error");
        throw new Error("failed to fetch single event data");
    };
};

export async function getEventImages(nameId){
    try {
        const data = await api.get(`https://bright-spark-be.onrender.com/api/images/single_event_images/${nameId}`);
        return data;
    } catch(error){
        console.error("error");
        throw new Error("failed to fetch event images")
    };
};


//test url - http://localhost:10000\
//prod url - https://bright-spark-be.onrender.com\