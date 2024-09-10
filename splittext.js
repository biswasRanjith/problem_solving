var input = "the quick brown fox jumped over the lazy fox";

function toUpper(input){
    var inputSplit = input.split(' ');
    
    var returnData = [];
    for( var i =0; i<inputSplit.length; i++){
        var first = inputSplit[i].charAt(0).toUpperCase();
        var second = inputSplit[i].slice(1, inputSplit[i].length)
        first = first+second
        returnData.push(first);
    }
    return returnData.join(' ');
    
}

console.log(toUpper(input));