const moment = require("moment");

export const findYears = () => {
    const currentYear = moment().format().slice(0, 4);
    const lastYear = moment().subtract(365, "days").calendar().slice(6, 10);

    return lastYear + "/" + currentYear;
};


export const formatRecentWork = (data: any) => { //finds unique event & collab names from recent performances, to display as hompage links
    const array = [...data]  
    const events = [];
    const collabs = [];
    const output = [];

    for(let i = 0; i < array.length; i++){
        if(!events.includes(array[i].event) && !collabs.includes(array[i].collaboration)){
                output.push(array[i]) //push to output
            };
        events.push(array[i].events); //push current event & collab to unique arrays
        collabs.push(array[i].collaboration);            
    };

    return output;
};

export const formatEventAndCollaborationNames = (string: string) => {
        if(!string.includes("_")) {
        return string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
    };

    let output = string.split("_").map((element) => {
        return element.slice(0, 1).toUpperCase() + element.slice(1, element.length) + " ";
    }).join("");

    output = output.split(" ").map((word) => {
        if (word === "Uk"){
            return "UK";
        } else {
            return word;
        };
    }).join(" ");

    return output.trim();
};