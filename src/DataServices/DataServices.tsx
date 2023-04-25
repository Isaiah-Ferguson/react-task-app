async function addTaskItem(blogItem: object) {
    const res = await fetch('',{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(blogItem)
    });
    if(!res.ok){
        const message = `An Error has Occured  ${res.status}`;
        throw new Error(message);
    }
    const data = await res.json();
    return data;
}

async function updateTaskItem(blogItem : object) {
    const res = await fetch('',{
        method:"PUT",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(blogItem)
    });
    if(!res.ok){
        const message = `An Error has Occured  ${res.status}`;
        throw new Error(message);
    }
    const data = await res.json();
    return data;
}

