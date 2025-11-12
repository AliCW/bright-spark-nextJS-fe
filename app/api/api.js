import axios from "axios";

const api = axios.create({
    baseURL: "https://bright-spark-be.onrender.com/",
});

export const fetchRecentWork = () => {
    return api 
        .get("https://bright-spark-be.onrender.com/api/images/recent_work")
        .then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
};

export const fetchAllCarouselImages = () => {
    return api
        .get("https://bright-spark-be.onrender.com/api/images/carousel_images")
        .then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
};

export const fetchAllEventThumbnails = () => {
    return api
        .get("https://bright-spark-be.onrender.com/api/images/event/thumbnails")
        .then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
};

export const fetchSingleEvent = (eventId) => {
    return api
        .get(`https://bright-spark-be.onrender.com/api/events/${eventId}`) 
        .then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
};

export const fetchEventImages = (nameId) => {
    return api
        .get(`https://bright-spark-be.onrender.com/api/images/single_event_images/${nameId}`)
        .then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
};


//test url - http://localhost:10000\
//prod url - https://bright-spark-be.onrender.com\