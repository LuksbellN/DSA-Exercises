// Some tests

//const numbers = [6, 2, 5, 3,9];
//const numbers = [12, 15, 23, 4 , 6, 10, 35, 28]; //Even number of element
//const numbers = []; //Empty list 
//const numbers = null; //Null pointer
//const numbers = [4, 6, 10, 12, 15, 23, 28, 35]; //already sorted array
const numbers = [12, 15, 23, 4 , 6, 10, 35]; //odd length array
//const numbers = [35, 28, 23, 15, 12, 10, 6, 4]; //descending sorted array input
//const numbers = [12];//one element
//const numbers = [12, 4]; // two elements
//const numbers = [12, 15, 23, 4 , 6, 10, 35, 28, 100, 130, 500, 1000, 235, 554, 75, 345, 800, 222, 333, 888, 444, 111, 666, 777, 60];//large list of elements 
//const numbers = [12, 15, -23, -4 , 6, 10, -35, 28]; //negative elements
//const numbers = [12, 12, 23, 4 , 6, 6, 10, -35, 28]; //duplicate elements
//const numbers = [12, 12, 12, 12, 12]; //Same element



function mergeSort (array) {
  if(!array) return null;
  if (array.length <= 1) return array;
  // Split Array in into right and left
  let left = array.splice(0,(Math.ceil(array.length/2)));
  let right = array;

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){  
    let res = []; 
    let rightIndex = 0, leftIndex = 0;
    while(true){        
        if(leftIndex === left.length) {
            for(let k = rightIndex;k<right.length;k++) {
                res.push(right[k]);
            }
            break;
        }
        if(rightIndex === right.length) {
            for(let k = leftIndex;k<left.length;k++) {
                res.push(left[k]);
            }
            break;
        }

        if(left[leftIndex]<right[rightIndex]) {
            res.push(left[leftIndex]);
            leftIndex++
        } else {
            res.push(right[rightIndex])
            rightIndex++;
        }
    }
    return res  
}

const answer = mergeSort(numbers);
console.log(answer);