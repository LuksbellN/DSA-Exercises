// Some tests

//const numbers = [6, 2, 5, 3,9];
//const numbers = [12, 15, 23, 4 , 6, 10, 35, 28]; //Even number of element
//const numbers = []; //Empty list 
//const numbers = [4, 6, 10, 12, 15, 23, 28, 35]; //already sorted array
//const numbers = [12, 15, 23, 4 , 6, 10, 35]; //odd length array
//const numbers = [35, 28, 23, 15, 12, 10, 6, 4]; //descending sorted array input
//const numbers = [12];//one element
//const numbers = [12, 4]; // two elements
const numbers = [12, 15, 23, 4 , 6, 10, 35, 28, 100, 130, 500, 1000, 235, 554, 75, 345, 800, 222, 333, 888, 444, 111, 666, 777, 60];//large list of elements 
//const numbers = [12, 15, -23, -4 , 6, 10, -35, 28]; //negative elements
//const numbers = [12, 12, 23, 4 , 6, 6, 10, -35, 28]; //duplicate elements
//const numbers = [12, 12, 12, 12, 12]; //Same element
//const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


function quickSort(array, left, right){
    if(left === right) return array; 
    if(array.length === 0) return array;
    let pivot = left;
    let i = right;
    while(pivot!==i) {
        if(pivot < i) {
            if(array[pivot]>array[i]) {
                let tmp = pivot;
                let tmp2 = array[pivot];
                array[pivot] = array[i];
                array[i] = tmp2;
                pivot = i;
                i = tmp--;
            } else i--;
        } else if(pivot > i) {
            if(array[pivot]<array[i]) {
                let tmp = pivot;
                let tmp2 = array[pivot];
                array[pivot] = array[i];
                array[i] = tmp2;
                pivot = i;
                i = tmp--;
            } else i++; 
        }
    }
    if(left !== pivot) quickSort(array, left, pivot-1);
    if(right !== pivot) quickSort(array, pivot+1, right);
    return array;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);