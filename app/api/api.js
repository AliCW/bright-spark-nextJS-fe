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