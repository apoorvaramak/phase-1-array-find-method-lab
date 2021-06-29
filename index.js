function isAWin(element){
    return(element.result === 'W');
}

function superbowlWin(arr){
    if(arr.find(isAWin) === undefined){
        return arr.find(isAWin)
    }
    return arr.find(isAWin).year;
    
}
