function findMatching(array, string){ 
    let matching = array.filter(function(array){
        return array.toLowerCase() === string.toLowerCase()
    })
    return matching 
}

function fuzzyMatch(array, match) {
    let matchingArray = array.filter(function(array){
        return array[0] === match[0]
    })
    return matchingArray
}

function matchName(array, string) {
    let matching = array.filter(function(array){
        return array.name === string;
    })
    return matching
}

