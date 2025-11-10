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
    }
    

    return output
};