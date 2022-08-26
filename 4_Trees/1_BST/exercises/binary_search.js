function binarySearch(arr, value){
    for(var i = 0; i < arr.length; i++){
        if(value === arr[i]){
            return(arr[i] + " is exist at index " + i);
        }
    }
    return undefined;
}

arr = [-1,0,3,5,9,12];
console.log(binarySearch(arr, 9));