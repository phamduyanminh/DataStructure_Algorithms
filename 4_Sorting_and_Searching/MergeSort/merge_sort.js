function merge(arr1, arr2){
    let combinedArr = [];
    let i = 0; 
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            combinedArr.push(arr1[i]);
            i++;
        }else if(arr1[i] > arr2[j]){
            combinedArr.push(arr2[i]);
            j++;
        }
    }

    while(i < arr1.length){
        combinedArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length){
        combinedArr.push(arr2[j]);
        j++;
    }
}

function mergeSort(arr){
    if(arr.length === 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([3,1,4,2]));