//ANCHOR: Implement an algorithm to determine if a string has all unique characters.

function isUnique(str){
    let uniqueStr = '';

    if(str.length === 0) return 'Empty string';

    for(let i = 0; i < str.length; i++){
        if(!uniqueStr.includes(str[i])){
            uniqueStr += str[i]; 
        }
    }

    return uniqueStr;
}

console.log(isUnique("Welcome to Geeksforgeeks"));