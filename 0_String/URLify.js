//ANCHOR: Write a method to replace all spaces in a string with '%20'

function URLify(str){
    const strReplaced =  str.replaceAll(' ', '%20');
    return strReplaced;
}

console.log(URLify('Mr John Smith'));