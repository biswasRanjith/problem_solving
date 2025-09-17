var input = "was,gateman,deliver,straw,star,lived,live,diaper,smart,spit";

function reverse(input){

    var inputSplit = input.split(',');
    var returnData = [];
    for(var i =0; i<inputSplit.length; i++){
        var temp = ''
        var word = inputSplit[i].split('');
        for(j = word.length-1; j>=0; j--){
            temp += word[j]
        }
        returnData.push(temp)
    }

    return returnData.join(',')
}
// Example usage:

console.log(reverse(input));