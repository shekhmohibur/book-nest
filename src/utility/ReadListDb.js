const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }else{
        return [];
    }
}
const addToStoredReadList = id => {
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        alert('You have Already Added this')
    }else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr)
    }
}
export {addToStoredReadList}